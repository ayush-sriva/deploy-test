package com.greencommute.service;

import com.greencommute.dao.LocationRepository;
import com.greencommute.entity.Location;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class LocationServiceImplTest {

    @Mock
    private LocationRepository locationRepository;

    @InjectMocks
    private LocationServiceImpl locationService;

    @Test
    public void getLocations(){
        List<Location> locations = new ArrayList<>();
        locations.add(new Location(123,"Hyderabad",510));
        when(locationRepository.findAll()).thenReturn(locations);
        int actual = locationService.findAll().size();
        int expected = 1;
        assertEquals(expected,actual);

    }
    @Test
    public void getById(){
        Location location =new Location(123,"Hyderabad",510);
        location.setId(21);
        Optional<Location> optional = Optional.ofNullable(location);
        when(locationRepository.findById(21)).thenReturn(optional);

        Location actual = locationService.findById(21);
        Location expected = location;

        assertEquals(expected,actual);
    }

}