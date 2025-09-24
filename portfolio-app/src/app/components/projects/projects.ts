import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with Angular and Node.js',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      imageUrl: 'assets/images/project1.jpg',
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
      imageUrl: 'assets/images/project2.jpg',
      demoUrl: 'https://demo-taskmanager.com',
      githubUrl: 'https://github.com/yourusername/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard using OpenWeather API',
      technologies: ['Vue.js', 'JavaScript', 'CSS3', 'API Integration'],
      imageUrl: 'assets/images/project3.jpg',
      demoUrl: 'https://demo-weather.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      featured: false
    }
  ];
}
