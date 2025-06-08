import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  heading = 'About Me'
  name = `I'm Vipin Sundar`
  role = 'Full-Stack Developer'
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus finibus dignissim. Vivamus porttitor, erat et pellentesque rhoncus, lorem augue bibendum nibh, sed pharetra nisi nunc sed neque. Proin sagittis nisl et elit efficitur, a ornare ante hendrerit. Cras quam odio, pellentesque ut efficitur ut, tempor ut felis. In hac habitasse platea dictumst. Vestibulum at auctor felis. Vivamus porta pretium elit at congue. Morbi lacinia dui eget orci tempor interdum. Sed nisl nulla, porttitor at ipsum sed, sagittis condimentum tellus. Vivamus fermentum diam ac libero rhoncus vehicula. Etiam ultricies id orci vitae fringilla.'

}
