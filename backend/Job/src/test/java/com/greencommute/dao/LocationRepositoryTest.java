package com.greencommute.dao;

import com.greencommute.entity.Location;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class LocationRepositoryTest {


    @Autowired
    private LocationRepository locationRepository;

    @Test
    public void getLocations(){
        List<Location> locations = locationRepository.findAll();

        org.assertj.core.api.Assertions.assertThat(locations.size()).isEqualTo(6);
    }
    @Test

    public void getEmployeeTest(){
        Location location = locationRepository.findById(1).get();

        org.assertj.core.api.Assertions.assertThat(location.getName()).isEqualTo("Hyderabad");
    }
}