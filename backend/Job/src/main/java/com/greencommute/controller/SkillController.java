package com.greencommute.controller;

import com.greencommute.entity.Skill;
import com.greencommute.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("/skills")
    public List<Skill> getSkills(){
        List<Skill> skill=skillService.findAll();

        if(skill==null){
            throw new RuntimeException("skills not found ");
        }
        return skill;
    }
}
