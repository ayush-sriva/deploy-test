package com.greencommute.service;

import com.greencommute.dao.LocationRepository;
import com.greencommute.entity.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class LocationServiceImpl implements LocationServive{
    private LocationRepository locationRepository;

    @Autowired
    public LocationServiceImpl(LocationRepository locationRepository){this.locationRepository = locationRepository;}
    @Override
    public List<Location> findAll() {
        List<Location> locations = locationRepository.findAll();
        return locations;
    }

    @Override
    public Location findById(int id) {
        Optional<Location> result = locationRepository.findById(id);
        Location location = null;
        if(result.isPresent()){
            location = result.get();
        }
        else{
            throw new RuntimeException("Didn't Find  Location with id- "+id);
        }

        return location;
    }
}
