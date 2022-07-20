package com.greencommute.repository;

import com.greencommute.entity.ApplyJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


public interface ApplyJobRepo extends JpaRepository<ApplyJob,Integer> {
    @Transactional
    @Modifying
    @Query("UPDATE ApplyJob a SET a.applied=1 where a.job_id.id=:jobId")
    Integer updateApply(@Param("jobId") Integer jobId);
}
