package com.greencommute.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.greencommute.dto.SavedJobDTO;
import com.greencommute.entity.*;
import com.greencommute.service.SavedJobServiceImpl;
import lombok.extern.log4j.Log4j2;
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
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@ComponentScan(basePackages = "com.greenCommute")
@ContextConfiguration
@AutoConfigureMockMvc
@Log4j2
class SavedJobControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Mock
    SavedJobServiceImpl savedJobServiceImpl;

    @InjectMocks
    SavedJobController savedJobController;

    @BeforeEach
    public void setUp() {
        mockMvc= MockMvcBuilders.standaloneSetup(savedJobController).build();
    }

    @Test
    public void getSavedJob() throws Exception{
        List<SavedJob> savedJobs=new ArrayList<>();

        Location locations=new Location(1234,"delhi",987);
        User user=new User(1,"x@gmail.com","gayatri",locations,"12345");
        Company company=new Company(1,"hp","qwer","1","1");
        Skill skill=new Skill(2,"qwert");
        Job job=new Job(1,"xyz","1998",company,skill,locations);
        SavedJob savedJob=new SavedJob(1,user,job,1);
        savedJobs.add(savedJob);
        when(savedJobServiceImpl.findAll()).thenReturn(savedJobs);

        this.mockMvc.perform(get("/api/savedjobs")).andExpect(status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(savedJobs.size())).andDo(print());;

    }
    @Test
    public void deleteSavedJob() throws Exception{
        Location locations=new Location(1234,"delhi",987);
        User user=new User(1,"x@gmail.com","gayatri",locations,"12345");
        Company company=new Company(1,"hp","qwer","1","1");
        Skill skill = new Skill(1,"Front-End Developer");
        Job job = new Job(1,"Job","12",company,skill,locations);
        SavedJob savedJob=new SavedJob(1,user,job,1);

        when(savedJobServiceImpl.findById(1)).thenReturn(savedJob);

        savedJobController.deleteSavedJob(1);
        this.mockMvc.perform(delete("/api/savedjobs/1",1))
                .andExpect(status().isOk());
        mockMvc = MockMvcBuilders.standaloneSetup(savedJobController).build();
    }
    @Test
    public void getSavedJobById() throws Exception{
        Location locations=new Location(1234,"delhi",987);
        User user=new User(1,"x@gmail.com","gayatri",locations,"12345");
        Company company=new Company(1,"hp","qwer","1","1");
        Skill skill = new Skill(1,"Front-End Developer");
        Job job = new Job(1,"Job","12",company,skill,locations);
        SavedJob savedJob=new SavedJob(1,user,job,1);

        savedJob.setId(1);
        when(savedJobServiceImpl.findById(1)).thenReturn(savedJob);
        this.mockMvc.perform(get("/api/savedjobs/1"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.applied").value(1))


                .andDo(print());
    }
    @Test
    void addSavedJob() throws Exception {
        Location location = new Location(110085,"Hyderabad",500);
        Company company = new Company(1,"Myntra","Fashion","FrontEnd","iamges");
        Skill skill = new Skill(1,"Front-End Developer");
        Job job = new Job(1,"Job","12",company,skill,location);
        User user = new User(1,"abc@gmail.com","Gayatri",location,"123");
        company.setId(1);
        skill.setId(1);
        job.setId(1);
        user.setId(1);
        SavedJob savedJob = new SavedJob(1,user,job,1);
        savedJob.setId(0);

        ObjectMapper mapper = new ObjectMapper();

        SavedJobDTO savedJobDTO = new SavedJobDTO(1,2,1);
        when(savedJobServiceImpl.convertToEntity(savedJobDTO)).thenReturn(savedJob);

        String jsonbody=mapper.writeValueAsString(savedJobDTO);
        log.info(jsonbody);
        this.mockMvc.perform(post("/api/savedjobs")
                        .content(jsonbody)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andDo(print());

    }
}