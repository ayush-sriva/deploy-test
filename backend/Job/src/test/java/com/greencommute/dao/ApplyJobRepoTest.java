package com.greencommute.dao;

import com.greencommute.entity.ApplyJob;
import com.greencommute.entity.Job;
import com.greencommute.repository.ApplyJobRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ApplyJobRepoTest {
    @Autowired
    private ApplyJobRepo applyJobRepo;

    @Test
    public void applyJobJob(){
        List<ApplyJob> jobList = applyJobRepo.findAll();

        org.assertj.core.api.Assertions.assertThat(jobList.size()).isEqualTo(4);
    }
}
