import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-living-space',
  templateUrl: './living-space.component.html',
  styleUrls: ['./living-space.component.css']
})
export class LivingSpaceComponent {
  livingSpace: String = " ";

  constructor(private router: Router) { }

  calculate() {
    // Save living space data and navigate to results page
    localStorage.setItem('livingSpace', this.livingSpace.toString());
    this.router.navigate(['/result']);
  }
}

