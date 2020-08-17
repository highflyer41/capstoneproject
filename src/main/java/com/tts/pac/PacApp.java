package com.tts.pac;

import com.tts.pac.entities.Activity;
import com.tts.pac.entities.ActivityImage;
import com.tts.pac.repositories.ActivityRepo;
import com.tts.pac.repositories.ImageRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PacApp implements CommandLineRunner{

	@Autowired
	private ActivityRepo activityRepo;

	@Autowired
	private ImageRepo imageRepo;

	public static void main(String[] args) {
		SpringApplication.run(PacApp.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// this.activityRepo.save(new Activity("wake up, get ready", 30));
		// this.activityRepo.save(new Activity("eat", 30));
		// this.activityRepo.save(new Activity("sleep", 360));

		this.imageRepo.save(new ActivityImage("https://i.ibb.co/C19Wfx7/Brush-Teeth.jpg", "brushTeeth"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/9TjQBdN/Toilet.jpg", "toilet"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/18dWrGf/Classroom.jpg", "class"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/kJd22WZ/Ride-in-Car.jpg", "carRide"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/KWb9GQM/School.jpg", "school"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/b1Zk9WZ/Science.jpg", "science"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/sm7W4dF/Sit.jpg", "sit"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/G5chRnD/Sleep.jpg", "sleep"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/R4z4xxn/Walk.jpg", "walk"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/HXSQBNV/Cooking.jpg", "cooking"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/WcZd466/Drinking.jpg", "drinking"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/2nVrszH/Eat.jpg", "eat"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/h82kXcw/Eat-Lunch.jpg", "eatLunch"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/pj9BzTS/Geography.jpg", "geography"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/0ZjGbks/History.jpg", "history"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/m0wVQnf/Lunch.jpg", "lunch"));
		this.imageRepo.save(new ActivityImage("https://i.ibb.co/sK3hSTV/Ready-to-Work.jpg", "work"));
	}

}
