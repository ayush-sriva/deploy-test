package com.greencommute.repository;

import com.greencommute.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FindJobRepo extends JpaRepository<Job,Integer> {
    @Query(value="select j from Job j where j.skill.id=:skill_id and j.location.id=:loc_id")
    List<Job> findBySkillIdAndCompanyId(@Param("skill_id")Integer skill_id,@Param("loc_id") Integer loc_id);
}
