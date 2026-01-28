import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <h1>Welcome to Preview Site</h1>
      <p>This is the home page of your application.</p>
      <div class="content">
        <h2>Getting Started</h2>
        <p>Navigate to your account page to view your profile information.</p>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
    }

    h2 {
      color: #666;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    p {
      color: #555;
      line-height: 1.6;
    }

    .content {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
  `]
})
export class HomeComponent {
}