package com.greencommute.controller;
import com.greencommute.service.ApplyJobServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

@WebMvcTest(ApplyJobController.class)
public class ApplyJobControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    ApplyJobServiceImpl applyJobServiceImpl;

    @Test
    public void applyJob() throws Exception{

        when(applyJobServiceImpl.updateApply(1)).thenReturn(1);
        this.mockMvc.perform(put("/api/apply/1")).andExpect(MockMvcResultMatchers.status().isOk());

    }
}