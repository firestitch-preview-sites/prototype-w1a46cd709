import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="nav-brand">
          <h2>MyApp</h2>
        </div>
        <div class="nav-links">
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/account" routerLinkActive="active">Account</a>
          <a routerLink="/admin" routerLinkActive="active">Admin</a>
          <a routerLink="/my-profile" routerLinkActive="active">My Profile</a>
        </div>
      </nav>
      
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .navbar {
      background: linear-gradient(135deg, #2c3e50, #3498db);
      color: white;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .nav-brand h2 {
      margin: 0;
      font-weight: 300;
      font-size: 1.5rem;
    }

    .nav-links {
      display: flex;
      gap: 30px;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .nav-links a:hover {
      background-color: rgba(255,255,255,0.1);
      transform: translateY(-1px);
    }

    .nav-links a.active {
      background-color: rgba(255,255,255,0.2);
      font-weight: 600;
    }

    .main-content {
      flex: 1;
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        height: auto;
        padding: 15px 20px;
      }
      
      .nav-links {
        gap: 20px;
        margin-top: 10px;
      }
      
      .nav-links a {
        font-size: 0.9rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'prototype';
}