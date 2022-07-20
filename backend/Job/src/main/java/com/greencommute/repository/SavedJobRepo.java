package com.greencommute.repository;

import com.greencommute.entity.SavedJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedJobRepo extends JpaRepository<SavedJob,Integer> {
}
