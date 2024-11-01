// src/app/result/result.component.ts
import { Component, OnInit } from '@angular/core';

// Example emission factors (replace with actual factors)
const EMISSION_FACTORS = {
  livingSpace: 10, // Example value
  transportation: 5, // Example value
  flying: 20, // Example value
  food: 15, // Example value
  shopping: 8, // Example value
};

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  footprint: number = 0;

  ngOnInit() {
    // Retrieve and convert user inputs from localStorage
    const livingSpaceStr = localStorage.getItem('livingSpace');
    const livingSpace = livingSpaceStr ? Number(livingSpaceStr) : 0; // Convert string to number

    const transportStr = localStorage.getItem('transport');
    const transport = transportStr ? Number(transportStr) : 0;

    const flyingStr = localStorage.getItem('flying');
    const flying = flyingStr ? Number(flyingStr) : 0;

    const foodStr = localStorage.getItem('food');
    const food = foodStr ? Number(foodStr) : 0;

    const shoppingStr = localStorage.getItem('shopping');
    const shopping = shoppingStr ? Number(shoppingStr) : 0;

    // Calculate carbon footprint
    this.footprint = (
      (livingSpace * EMISSION_FACTORS.livingSpace) +
      (transport * EMISSION_FACTORS.transportation) +
      (flying * EMISSION_FACTORS.flying) +
      (food * EMISSION_FACTORS.food) +
      (shopping * EMISSION_FACTORS.shopping)
    );
  }
}


