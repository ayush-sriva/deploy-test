package com.greencommute.service;

import com.greencommute.dto.SavedJobDTO;
import com.greencommute.entity.Job;
import com.greencommute.entity.SavedJob;
import com.greencommute.entity.User;
import com.greencommute.exception.SavedJobNotFound;
import com.greencommute.repository.JobRepo;
import com.greencommute.repository.SavedJobRepo;
import com.greencommute.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SavedJobServiceImpl implements SavedJobService{
    private final SavedJobRepo savedJobRepo;
    private final JobRepo jobRepo;
    private final UserRepo userRepo;
    @Override
    public List<SavedJob> findAll() {
        return savedJobRepo.findAll();
    }
    @Autowired
    public SavedJobServiceImpl(SavedJobRepo savedJobRepo, JobRepo jobRepo, UserRepo userRepo) {
        this.savedJobRepo = savedJobRepo;
        this.jobRepo = jobRepo;
        this.userRepo = userRepo;
    }

    public void save(SavedJob savedJob) {
        savedJobRepo.save(savedJob);
    }

    @Override
    public SavedJob convertToEntity(SavedJobDTO dto) {
        SavedJob savedJobs = new SavedJob();
        Optional<Job> jobs = jobRepo.findById(dto.getJob());
        Optional<User> users = userRepo.findById(dto.getUser());
        Job job = null;
        User user = null;
        if(jobs.isPresent() && users.isPresent()) {
            job = jobs.get();
            user = users.get();
        }
        else {
            throw new SavedJobNotFound("No Saved Job found with user_id: "+dto.getUser()+" and job_id: "+dto.getJob());
        }
        savedJobs.setJob(job);
        savedJobs.setUser(user);
        savedJobs.setApplied(dto.getApplied());
        return savedJobs;
    }

    @Override
    public SavedJob findById(int id) {
        Optional<SavedJob> result = savedJobRepo.findById(id);
        SavedJob job = null;

        if (result.isPresent()) {
            job = result.get();
        }
        else {

            throw new SavedJobNotFound("No Saved Job Found with id "+id);
        }

        return job;
    }

    @Override
    public void deleteById(int id) {
         savedJobRepo.deleteById(id);
    }
}
