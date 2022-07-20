package com.greencommute.service;

import com.greencommute.entity.Job;

import java.util.List;

public interface FindJobService {
    public List<Job> findBySkillIdAndCompanyId(Integer skill_id, Integer loc_id);
}
