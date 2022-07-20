package com.greencommute.controller;

import com.greencommute.entity.Job;
import com.greencommute.exception.JobNotFoundException;
import com.greencommute.service.JobServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class JobRestController {
    private final JobServiceImpl jobService;
    @Autowired
    public JobRestController(JobServiceImpl jobService) {
        this.jobService = jobService;
    }
    @GetMapping("/job/{jobId}")
    public Job getJob(@PathVariable int jobId) {
        Job job =  jobService.findById(jobId);
        if(job==null) {
            throw new JobNotFoundException("Job Not Found"+jobId);
        }
        return job;
    }
    @GetMapping("/job")
    public List<Job> getAllJobs() {
        return jobService.getJobs();
    }
}
