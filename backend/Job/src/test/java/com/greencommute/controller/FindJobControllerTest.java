package com.greencommute.controller;

import com.greencommute.entity.Company;
import com.greencommute.entity.Job;
import com.greencommute.entity.Location;
import com.greencommute.entity.Skill;
import com.greencommute.service.FindJobServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import java.util.ArrayList;
import java.util.List;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FindJobController.class)
public class FindJobControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    FindJobServiceImpl findJobService;
    @Test
    public void getLocations() throws Exception{
        List<Job> jobs=new ArrayList<>();
        Location location=new Location(1,1234,"delhi",987);
        Company company=new Company(1,"hp","qwer");
        Skill skill=new Skill(2,"qwert");
        jobs.add(new Job(1,"xyz","1998",company,skill,location));
        when(findJobService.findBySkillIdAndCompanyId(2,1)).thenReturn(jobs);

        this.mockMvc.perform(get("/findjobs/2/1")).andExpect(status().isOk()).andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(jobs.size())).andDo(print());;
    }
}
