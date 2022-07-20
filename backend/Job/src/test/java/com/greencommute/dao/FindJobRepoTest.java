package com.greencommute.dao;


import com.greencommute.entity.Job;
import com.greencommute.repository.FindJobRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class FindJobRepoTest {
    @Autowired
    private FindJobRepo findJobRepo;
    @Test
    public void findJob(){
        List<Job> jobList = findJobRepo.findBySkillIdAndCompanyId(2,1);

        org.assertj.core.api.Assertions.assertThat(jobList.size()).isEqualTo(1);
    }
}





