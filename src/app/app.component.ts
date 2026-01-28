import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="nav-brand">
          <h1>Preview Site</h1>
        </div>
        <ul class="nav-links">
          <li>
            <a routerLink="/home" 
               routerLinkActive="active" 
               [routerLinkActiveOptions]="{exact: true}">
              Home
            </a>
          </li>
          <li>
            <a routerLink="/account" 
               routerLinkActive="active">
              Account
            </a>
          </li>
        </ul>
      </nav>
      
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: #f5f5f5;
    }

    .navbar {
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
    }

    .nav-brand h1 {
      margin: 0;
      color: #333;
      font-size: 1.5rem;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      text-decoration: none;
      color: #666;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .nav-links a:hover {
      color: #007bff;
      background-color: #f8f9fa;
    }

    .nav-links a.active {
      color: #007bff;
      background-color: #e3f2fd;
    }

    .main-content {
      min-height: calc(100vh - 60px);
      padding: 20px 0;
    }
  `]
})
export class AppComponent {
}