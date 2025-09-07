import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" src="/assets/apt.jpg" alt="apartment for rent" />
      <h2 class="listing-heading">Large apartment in center of the city</h2>
      <p class="listing-location">This spacious apartment is located in the heart of the city, close to all amenities.</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

}
