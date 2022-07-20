package com.greencommute.service;

import com.greencommute.entity.*;
import com.greencommute.repository.FindJobRepo;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class FindJobServiceImplTest {
    @Mock
    private FindJobRepo findJobRepo;;
    @InjectMocks
    private FindJobServiceImpl findJobService;
    @Test
    public void findJobs()
    {
        List<Job> findJobs=new ArrayList<>();

        Location location=new Location(1,1234,"delhi",987);
        Company company=new Company(1,"hp","qwer");
        Skill skill=new Skill(2,"qwert");
        Job job=new Job(1,"xyz","1998",company,skill,location);
        findJobs.add(job);
        when(findJobRepo.findAll()).thenReturn(findJobs);
        int actual=findJobService.findBySkillIdAndCompanyId(3,2).size();
        int expected=0;
        assertEquals(expected,actual);
    }
}
