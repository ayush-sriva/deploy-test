package com.greencommute.service;

import com.greencommute.entity.Skill;
import com.greencommute.repository.SkillRepo;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@NoArgsConstructor
public class SkillServiceImpl implements SkillService {
    private SkillRepo skillRepo;
    @Autowired
    public SkillServiceImpl(SkillRepo theSkillRepo) {
        skillRepo = theSkillRepo;
    }
    @Override
    public List<Skill> findAll() {
        return skillRepo.findAll();
    }
}
