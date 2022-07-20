package com.greencommute.dao;
import com.greencommute.entity.Location;
import com.greencommute.entity.SavedJob;
import com.greencommute.repository.SavedJobRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

@SpringBootTest
public class SavedJobRepoTest {
    @Autowired
    private SavedJobRepo savedJobRepo;
    @Test
    public void getSavedJob(){
        List<SavedJob> locations = savedJobRepo.findAll();

        org.assertj.core.api.Assertions.assertThat(locations.size()).isEqualTo(3);
    }

    @Test

    public void savedJobByid(){
        SavedJob savedJob = savedJobRepo.findById(9).get();

        org.assertj.core.api.Assertions.assertThat(savedJob.getApplied()).isEqualTo(1);
    }
    @Test
    public void deleteSavedJob(){
        SavedJob savedJob = savedJobRepo.findById(1).get();
        savedJobRepo.delete(savedJob);
        SavedJob savedJob1 = null;

        Optional<SavedJob> optionsalSavedjob = savedJobRepo.findById(1);

        if(optionsalSavedjob.isPresent()){
            savedJob1=optionsalSavedjob.get();
        }
        org.assertj.core.api.Assertions.assertThat(savedJob1).isNull();
    }
}