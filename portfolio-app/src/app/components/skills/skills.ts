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
    { name: 'C#', category: 'Backend', iconClass: 'fas fa-code' },
    { name: 'Java', category: 'Backend', iconClass: 'fab fa-java' },
    { name: 'Python', category: 'Backend', iconClass: 'fab fa-python' },
    { name: 'C', category: 'Backend', iconClass: 'fas fa-terminal' },
    { name: 'Angular', category: 'Frontend', iconClass: 'fab fa-angular' },
    { name: 'TypeScript', category: 'Frontend', iconClass: 'fab fa-js' },
    { name: 'HTML5', category: 'Frontend', iconClass: 'fab fa-html5' },
    { name: 'CSS3/SCSS', category: 'Frontend', iconClass: 'fab fa-css3-alt' },
    { name: 'SQL', category: 'Database', iconClass: 'fas fa-database' },
    { name: 'Git', category: 'Tools', iconClass: 'fab fa-git-alt' },
    { name: 'Scrum', category: 'Methodology', iconClass: 'fas fa-users' },
    { name: 'Agile', category: 'Methodology', iconClass: 'fas fa-sync-alt' },
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  get categories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }
}
