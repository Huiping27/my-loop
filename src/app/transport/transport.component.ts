import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent {
  transport:String = " ";

  constructor(private router: Router) { }

  next() {
    // Save transport data and navigate to the next section
    localStorage.setItem('transport', this.transport.toString());
    this.router.navigate(['/flying']);
  }
}
