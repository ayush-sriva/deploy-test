package com.greencommute.service;

import com.greencommute.entity.Job;
import com.greencommute.repository.FindJobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FindJobServiceImpl implements FindJobService{
    @Autowired
    private FindJobRepo findJobRepo;
    @Override
    public List<Job> findBySkillIdAndCompanyId(Integer skill_id, Integer loc_id) {
        return findJobRepo.findBySkillIdAndCompanyId(skill_id,loc_id);
    }
}
