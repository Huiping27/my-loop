import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flying',
  templateUrl: './flying.component.html',
  styleUrls: ['./flying.component.css']
})
export class FlyingComponent {
  flying: string = "";

  constructor(private router: Router) { }

  next() {
    // Save flying data and navigate to the next section
    localStorage.setItem('flying', this.flying.toString());
    this.router.navigate(['/food']);
  }
}

