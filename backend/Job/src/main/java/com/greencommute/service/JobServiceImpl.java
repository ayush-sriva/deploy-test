package com.greencommute.service;

import com.greencommute.entity.Job;
import com.greencommute.exception.JobNotFoundException;
import com.greencommute.repository.JobRepo;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
public class JobServiceImpl implements JobService{

    private JobRepo jobRepo;
    @Autowired
    public JobServiceImpl(JobRepo jobRepo) {
        this.jobRepo = jobRepo;
    }


    @Override
    public List<Job> getJobs() {
        return jobRepo.findAll();
    }

    @Override
    public Job findById(int id) {
        Optional<Job> result = jobRepo.findById(id);

        Job job = null;

        if (result.isPresent()) {
            job = result.get();
        }
        else {
            throw new JobNotFoundException("No Job Found with id: "+id);
        }

        return job;
    }
}
