package com.greencommute.service;

import com.greencommute.entity.Location;

import java.util.List;

public interface LocationServive {
    public List<Location> findAll();

    public Location findById(int id);
}
