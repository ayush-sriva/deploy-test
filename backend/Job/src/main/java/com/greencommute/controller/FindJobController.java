package com.greencommute.controller;

import com.greencommute.entity.Job;
import com.greencommute.service.FindJobServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/findjobs")
public class FindJobController {
    @Autowired
    private FindJobServiceImpl findJobServiceImpl;

    @GetMapping("/{skill_id}/{loc_id}")
    public List<Job> findJob(@PathVariable("skill_id") Integer skill_id, @PathVariable("loc_id") Integer loc_id) {
        List<Job> jobList = findJobServiceImpl.findBySkillIdAndCompanyId(skill_id,loc_id);
        if(jobList==null) {
            throw new RuntimeException("Job with skill_id"+skill_id+" and location_id "+loc_id+"not found");
        }

        return jobList;
    }
}
