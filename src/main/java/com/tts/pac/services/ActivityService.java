package com.tts.pac.services;

import java.util.List;

import com.tts.pac.entities.Activity;
import com.tts.pac.repositories.ActivityRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {
    
    @Autowired
    ActivityRepo activityRepo;

    public List<Activity> getActivities() {
        return activityRepo.findAll();
    }

    public void addActivity(Activity activity) {
        activityRepo.save(activity);
    }

    public void deleteActivity(Long id) {
        activityRepo.deleteById(id);
    }

}