import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-leisure-culture',
  templateUrl: './shopping-leisure-culture.component.html',
  styleUrls: ['./shopping-leisure-culture.component.css']
})
export class ShoppingLeisureCultureComponent {
  shopping: String = " ";

  constructor(private router: Router) { }

  next() {
    // Save shopping data and navigate to the next section
    localStorage.setItem('shopping', this.shopping.toString());
    this.router.navigate(['/living-space']);
  }
}


