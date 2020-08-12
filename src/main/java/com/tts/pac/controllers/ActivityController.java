package com.tts.pac.controllers;

import java.util.Collection;

import com.tts.pac.entities.Activity;
import com.tts.pac.services.ActivityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ActivityController {
    
    @Autowired
    private ActivityService activityService;

    @GetMapping("/activities")
    public Collection<Activity> getAllActivities() {
        return activityService.getActivities();
    }


}