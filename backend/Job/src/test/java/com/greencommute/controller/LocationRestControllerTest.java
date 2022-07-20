package com.greencommute.controller;

import com.greencommute.entity.Location;
import com.greencommute.service.LocationServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ComponentScan(basePackages = "com.greenCommute")
@ContextConfiguration
@AutoConfigureMockMvc
class LocationRestControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    LocationServiceImpl locationService;

    @InjectMocks
    LocationRestController locationRestController;

    @BeforeEach
    public void setUp() {
        mockMvc= MockMvcBuilders.standaloneSetup(locationRestController).build();
    }

    @Test
    public void getLocations() throws Exception{
        List<Location> locations = new ArrayList<>();
        Location location1 = new Location(123,"Hyderabad",500);
        location1.setId(1);
        Location location2 = new Location(1234,"Mumbai",550);
        location2.setId(2);
        locations.add(location1);
        locations.add(location2);

        when(locationService.findAll()).thenReturn(locations);

        this.mockMvc.perform(get("/api/locations")).andExpect(status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(locations.size())).andDo(print());;
    }

    @Test
    public void getLocation() throws Exception{
        Location location = new Location(15245,"New Delhi",500);
        location.setId(1);
        when(locationService.findById(1)).thenReturn(location);
        this.mockMvc.perform(get("/api/locations/1",1))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.pin").value(15245))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("New Delhi"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.aqi").value(500))


                .andDo(print());
    }
}