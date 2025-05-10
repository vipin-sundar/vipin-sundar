import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Vipin Sundar';
  subtitle = 'Full Stack Developer';
  description = 'I specialize in building dynamic, responsive, and scalable web applications using modern technologies. Passionate about creating clean, efficient code and delivering exceptional user experiences.';
  actionText = 'Explore My Projects';
}
