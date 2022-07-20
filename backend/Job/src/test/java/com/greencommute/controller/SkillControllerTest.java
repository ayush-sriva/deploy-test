package com.greencommute.controller;


import com.greencommute.entity.Skill;
import com.greencommute.service.SkillServiceImpl;
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
public class SkillControllerTest {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    SkillServiceImpl skillService;

    @InjectMocks
    SkillController skillController;

    @BeforeEach
    public void setUp() {
        mockMvc= MockMvcBuilders.standaloneSetup(skillController).build();
    }
    @Test
    public void getSkills() throws Exception{
        List<Skill> skills=new ArrayList<>();
        skills.add(new Skill(1,"Backend dev"));
        skills.add(new Skill(2,"frontend dev"));
        when(skillService.findAll()).thenReturn(skills);

        this.mockMvc.perform(get("/api/skills")).andExpect(status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(skills.size())).andDo(print());;

    }
}
