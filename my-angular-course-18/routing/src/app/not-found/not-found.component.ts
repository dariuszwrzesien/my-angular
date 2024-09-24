import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  ngOnInit(): void {
    console.log('Page not found');
    console.log('Redirecting to home page');
  }
}
