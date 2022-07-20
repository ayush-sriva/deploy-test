package com.greencommute.controller;

import com.greencommute.service.ApplyJobServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApplyJobController {

    @Autowired
    private ApplyJobServiceImpl applyJobServiceImpl;
    @PutMapping("/apply/{id}")
    public void applyJob(@PathVariable("id") Integer id){
        System.out.println(id);
        applyJobServiceImpl.updateApply(id);
    }
}
