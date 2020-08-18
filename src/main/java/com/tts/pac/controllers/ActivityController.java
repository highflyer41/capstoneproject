package com.tts.pac.controllers;

import java.util.Collection;

import com.tts.pac.entities.Activity;
import com.tts.pac.services.ActivityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "https://fast-retreat-22082.herokuapp.com"})
public class ActivityController {
    
    @Autowired
    private ActivityService activityService;

    @GetMapping("/activities")
    public Collection<Activity> getAllActivities() {
        return activityService.getActivities();
    }

    @PostMapping(value="/activities", consumes=MediaType.APPLICATION_JSON_VALUE)
    public void addActivities(@RequestBody Activity activity) {
        activityService.addActivity(activity);
    }

    @DeleteMapping("/activities/{id}")
    public void deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
    }


}