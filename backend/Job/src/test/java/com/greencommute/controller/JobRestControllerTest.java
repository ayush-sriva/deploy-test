package com.greencommute.controller;

import com.greencommute.entity.Company;
import com.greencommute.entity.Job;
import com.greencommute.entity.Location;
import com.greencommute.entity.Skill;
import com.greencommute.service.JobServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ComponentScan(basePackages = "com.greenCommute")
@ContextConfiguration
@AutoConfigureMockMvc
class JobRestControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Mock
    JobServiceImpl jobService;

    @InjectMocks
    JobRestController jobRestController;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(jobRestController).build();
    }

    @Test
    void getJob() throws Exception {
        Location location = new Location(110085,"Delhi",568);
        Company company = new Company(1,"Myntra","Fashion","FrontEnd","images");
        Skill skill = new Skill(1,"Front-End Developer");
        Job job = new Job(1,"Job","12",company,skill,location);
        company.setId(1);
        skill.setId(1);
        location.setId(1);
        job.setId(1);
        when(jobService.findById(1)).thenReturn(job);
        this.mockMvc.perform(get("/api/job/1", 1))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.createdAt").value("12"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.description").value("Job"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.location.name").value("Delhi"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.company.name").value("Myntra"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.skill.name").value("Front-End Developer"))
                .andDo(print());
    }
}
