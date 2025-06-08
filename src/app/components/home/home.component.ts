import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  greeting = 'Hi, my name is';
  title = 'Vipin Sundar';
  subtitle = 'Full Stack Developer';
  role = 'Lorem ipsum dolor sit amet.'
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus finibus dignissim. Vivamus porttitor, erat et pellentesque rhoncus, lorem augue bibendum nibh, sed pharetra nisi nunc sed neque. Proin sagittis nisl et elit efficitur, a ornare ante hendrerit. Cras quam odio, pellentesque ut efficitur ut, tempor ut felis.';
  buttons = {
    resume: 'Download Resume',
    contact: 'Contact Me'
  }
}
