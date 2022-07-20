package com.greencommute.service;

import com.greencommute.entity.Job;

import java.util.List;

public interface JobService {
    List<Job> getJobs();
    Job findById(int id);
}
