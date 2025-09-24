import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills: Skill[] = [
    { name: 'Angular', level: 'Advanced', category: 'Frontend', iconClass: 'fab fa-angular' },
    { name: 'TypeScript', level: 'Advanced', category: 'Frontend', iconClass: 'fab fa-js-square' },
    { name: 'JavaScript', level: 'Expert', category: 'Frontend', iconClass: 'fab fa-js-square' },
    { name: 'HTML5', level: 'Expert', category: 'Frontend', iconClass: 'fab fa-html5' },
    { name: 'CSS3/SCSS', level: 'Advanced', category: 'Frontend', iconClass: 'fab fa-css3-alt' },
    { name: 'React', level: 'Intermediate', category: 'Frontend', iconClass: 'fab fa-react' },
    { name: 'Node.js', level: 'Advanced', category: 'Backend', iconClass: 'fab fa-node-js' },
    { name: 'Express.js', level: 'Advanced', category: 'Backend', iconClass: 'fas fa-server' },
    { name: 'MongoDB', level: 'Intermediate', category: 'Database', iconClass: 'fas fa-database' },
    { name: 'PostgreSQL', level: 'Intermediate', category: 'Database', iconClass: 'fas fa-database' },
    { name: 'Git', level: 'Advanced', category: 'Tools', iconClass: 'fab fa-git-alt' },
    { name: 'Docker', level: 'Intermediate', category: 'Tools', iconClass: 'fab fa-docker' }
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  get categories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }
}
