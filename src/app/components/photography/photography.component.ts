import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  photos = [
    { id: 1011, alt: 'Mountain landscape' },
    { id: 1015, alt: 'Forest trail' },
    { id: 1016, alt: 'Coastal view' },
    { id: 1018, alt: 'Urban architecture' },
    { id: 1019, alt: 'Desert scenery' },
    { id: 1020, alt: 'Lake reflection' }
  ].map(photo => ({
    ...photo,
    url: `https://picsum.photos/id/${photo.id}/600/400`,
    fallbackUrl: 'assets/images/placeholder.jpg' // Add a fallback image in your assets
  }));

  handleImageError(event: Event, photo: any) {
    const img = event.target as HTMLImageElement;
    img.src = photo.fallbackUrl;
    img.alt = 'Placeholder image';
  }
}
