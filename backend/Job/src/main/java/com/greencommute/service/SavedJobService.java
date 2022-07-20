package com.greencommute.service;

import com.greencommute.dto.SavedJobDTO;
import com.greencommute.entity.SavedJob;

import java.util.List;

public interface SavedJobService {
    List<SavedJob> findAll();
    SavedJob findById(int i);
    void deleteById(int theId);
    void save(SavedJob savedJobs);
    SavedJob convertToEntity(SavedJobDTO dto);
}
