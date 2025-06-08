import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  github?: string;
  preview?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Lanchat',
      description:
        'A terminal-based chat app built with Ink and Node.js, enabling fast peer-to-peer conversations from your terminal.',
      github: 'https://github.com/yourusername/lanchat',
      preview: 'https://lanchat.example.com',
    },
    {
      name: 'Budget Tracker',
      description:
        'A modern budget tracking app that helps users manage expenses, set goals, and visualize financial habits with charts.',
      github: 'https://github.com/yourusername/budget-tracker',
    },
    {
      name: 'Photography Portfolio',
      description:
        'A responsive photo showcase using CSS grid layouts that adapt to all screen sizes with a clean brutalist style.',
    },
  ];
}
