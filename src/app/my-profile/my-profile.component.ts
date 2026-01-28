import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  template: `
    <div class="my-profile-container">
      <div class="content">
        <h1 class="page-heading">My Profile</h1>
      </div>
    </div>
  `,
  styles: [`
    .my-profile-container {
      min-height: calc(100vh - 60px);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 20px;
    }

    .content {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .page-heading {
      color: white;
      font-size: 3rem;
      font-weight: 300;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      letter-spacing: 2px;
    }

    @media (max-width: 768px) {
      .page-heading {
        font-size: 2rem;
      }
    }
  `]
})
export class MyProfileComponent { }