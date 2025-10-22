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
      title: 'LaCulture',
      description: 'A webapp showcasing the riches of Louisiana culture and allowing users to explore Louisiana.',
      technologies: ['Angular','TypeScript','SCSS','HTML5','C#','SQL'],
      imageUrl: 'assets/images/LaCultureUI.png',
      demoUrl: 'https://demo-laculture.com',
      githubUrl: 'https://github.com/LandonW-CSC-LSU/4330_Project_LaCulture',
      featured: false
    },
    {
      id: 2,
      title: 'CatholicCompanion',
      description: 'A webapp providing prayer resources for Catholic communities.',
      technologies: ['Angular','TypeScript', 'HTML5', 'SCSS','C#','SQL'],
      imageUrl: 'assets/images/CatholicCompanion.png',
      demoUrl: 'https://catholiccompanion.azurewebsites.net/#/',
      githubUrl: 'https://github.com/LandonW-CSC-LSU/CatholicCompanion',
      featured: false
    },
    {
      id: 3,
      title: 'This Website!',
      description: 'A portfolio website showcasing my projects and skills',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      imageUrl: 'assets/images/PortfolioWebsite.png',
      demoUrl: 'https://LandonW-CSC-LSU.github.io/Portfolio/',
      githubUrl: 'https://github.com/LandonW-CSC-LSU/Portfolio',
      featured: false
    }
  ];
}
