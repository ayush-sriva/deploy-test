package com.greencommute.controller;


import com.greencommute.entity.Location;
import com.greencommute.exception.LocationNotFoundException;
import com.greencommute.service.LocationServive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api")
public class LocationRestController {
    private LocationServive locationServive;

    public LocationRestController(LocationServive locationServive){this.locationServive = locationServive;}

    @GetMapping("/locations")
    public List<Location> getLocations(){
        return locationServive.findAll();
    }

    @GetMapping("/locations/{id}")
    public Location getLocation(@PathVariable int id){
        if( (id<0) ){
            throw new LocationNotFoundException("Location id not Found -"+ id);
        }
        Location location = locationServive.findById(id);
        if(location==null) {
            throw new LocationNotFoundException("Location id not Found -"+ id);
        }

        return location;
    }

}
