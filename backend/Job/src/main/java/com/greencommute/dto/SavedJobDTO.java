package com.greencommute.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SavedJobDTO {
    private Integer user;
    private Integer job;
    private Integer applied;
}
