package com.greencommute.service;

import com.greencommute.repository.ApplyJobRepo;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@NoArgsConstructor
@Service
public class ApplyJobServiceImpl implements ApplyJobService{
    @Autowired
    private ApplyJobRepo applyJobRepo;
//    @Autowired
//
//
//    public ApplyJobServiceImpl(ApplyJobRepo theApplyJobRepo) {
//        applyJobRepo=theApplyJobRepo;
//    }
    @Override
    public Integer updateApply(Integer jobId) {
        return applyJobRepo.updateApply(jobId);
    }
}
