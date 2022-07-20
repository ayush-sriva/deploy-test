package com.greencommute.service;

import com.greencommute.entity.*;
import com.greencommute.repository.SavedJobRepo;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.willDoNothing;
import static org.mockito.Mockito.*;
@SpringBootTest
public class SavedJobServiceImplTest {
    @Mock
    private SavedJobRepo savedJobRepo;
    @InjectMocks
    private SavedJobServiceImpl savedJobService;

    @Test
    public void getSavedJobs()
    {
        List<SavedJob> savedJobs=new ArrayList<>();

        Location locations=new Location(1234,"delhi",987);
        User user=new User(1,"x@gmail.com","gayatri",locations,"12345");
        Company company=new Company(1,"hp","qwer","asdf","HP");
        Skill skill=new Skill(2,"qwert");
        Job job=new Job(1,"xyz","1998",company,skill,locations);
        SavedJob savedJob=new SavedJob(1,user,job,1);
        savedJobs.add(savedJob);
        when(savedJobRepo.findAll()).thenReturn(savedJobs);
        int actual=savedJobService.findAll().size();
        int expected=1;
        assertEquals(expected,actual);
    }
    @Test
    public void getById(){
        Location locations=new Location(1234,"delhi",987);
        User user=new User(1,"x@gmail.com","gayatri",locations,"12345");
        Company company=new Company(1,"hp","qwer","asdf","HP");
        Skill skill=new Skill(2,"qwert");
        Job job=new Job(1,"xyz","1998",company,skill,locations);
        SavedJob savedJob=new SavedJob(1,user,job,1);
        Optional<SavedJob> optional = Optional.ofNullable(savedJob);
        when(savedJobRepo.findById(1)).thenReturn(optional);

        SavedJob actual = savedJobService.findById(1);
        SavedJob expected = savedJob;

        assertEquals(expected,actual);
    }
    @Test
    public void deleteById()
    {
        willDoNothing().given(savedJobRepo).deleteById(1);
        savedJobService.deleteById(1);
        verify(savedJobRepo, times(1)).deleteById(1);
    }
}