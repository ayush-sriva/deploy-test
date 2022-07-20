package com.greencommute.repository;

import com.greencommute.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepo extends JpaRepository<Job,Integer> {
}
