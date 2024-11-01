import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  food: string = "";

  constructor(private router: Router) { }

  next() {
    // Save food data and navigate to the next section
    localStorage.setItem('food', this.food.toString());
    this.router.navigate(['/shopping-leisure-culture']);
  }
}

