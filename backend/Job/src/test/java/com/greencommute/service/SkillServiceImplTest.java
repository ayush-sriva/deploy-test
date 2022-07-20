package com.greencommute.service;

import com.greencommute.entity.Skill;
import com.greencommute.repository.SkillRepo;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class SkillServiceImplTest {
    @Mock
    private SkillRepo skillRepo;
    @InjectMocks
    private SkillServiceImpl skillService;
    @Test
    public void getSkills(){
        List<Skill> skills=new ArrayList<>();
        skills.add(new Skill(7,"Product Designer"));
        when(skillRepo.findAll()).thenReturn(skills);
        int actual=skillService.findAll().size();
        int expected=1;
        assertEquals(expected,actual);
    }
}
