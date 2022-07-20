package com.greencommute.service;

import com.greencommute.entity.*;
import com.greencommute.repository.ApplyJobRepo;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ApplyJobServiceImplTest {
    @Mock
    private ApplyJobRepo applyJobRepo;
    @InjectMocks
    private ApplyJobServiceImpl applyJobService;
    @Test
    public void updateJob()
    {
        List<ApplyJob> applyJobs=new ArrayList<>();

        Location locations=new Location(1,1234,"delhi",987);
        User user=new User(1,"x@gmail.com","gayatri",locations,"12345");
        Company company=new Company(1,"hp","qwer");
        Skill skill=new Skill(2,"qwert");
        Job job=new Job(2,"xyz","1998",company,skill,locations);
        ApplyJob applyJob=new ApplyJob(1,user,job,1);
        applyJobs.add(applyJob);
        int actual=applyJobService.updateApply(2);
        int expected=0;
        assertEquals(expected,actual);
    }

}
