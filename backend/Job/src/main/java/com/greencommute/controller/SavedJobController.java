package com.greencommute.controller;


import com.greencommute.dto.SavedJobDTO;
import com.greencommute.entity.SavedJob;
import com.greencommute.exception.SavedJobNotFound;
import com.greencommute.service.SavedJobServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class SavedJobController {

    private final SavedJobServiceImpl savedJobServiceImpl;
    @Autowired
    public SavedJobController(SavedJobServiceImpl savedJobServiceImpl) {
        this.savedJobServiceImpl = savedJobServiceImpl;
    }

    @GetMapping("/savedjobs")
    public List<SavedJob> getAllSavedJobs()
    {
        List<SavedJob> job=savedJobServiceImpl.findAll();
        if(job==null)
        {
            throw new RuntimeException("Job not found ");
        }
        return job;
    }
    @GetMapping("/savedjobs/{id}")
    public SavedJob getSavedJob(@PathVariable int id)
    {
        SavedJob job = savedJobServiceImpl.findById(id);
        if(job==null)
        {
            throw new SavedJobNotFound("No Saved Job Found with id "+id);
        }
        return job;
    }

    @DeleteMapping("/savedjobs/{id}")
    public String deleteSavedJob(@PathVariable int id){
        SavedJob saved = savedJobServiceImpl.findById(id);
        if (saved == null) {
            throw new RuntimeException("job not found");
        }
        savedJobServiceImpl.deleteById(id);
        return "Deleted job id - " + id;
    }


    @PostMapping("/savedjobs")
    public SavedJob addJob(@RequestBody SavedJobDTO savedJobDTO) {
        SavedJob savedJob = savedJobServiceImpl.convertToEntity(savedJobDTO);
        if(savedJob==null) {
            throw new SavedJobNotFound("No saved job Found");
        }
        savedJobServiceImpl.save(savedJob);
        return savedJob;
    }
}
