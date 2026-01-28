import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="top-nav">
      <div class="nav-container">
        <div class="nav-brand">
          <h2>MyApp</h2>
        </div>
        <div class="nav-links">
          <a routerLink="/home" routerLinkActive="active" class="nav-link">Home</a>
          <a routerLink="/account" routerLinkActive="active" class="nav-link">Account</a>
          <a routerLink="/admin" routerLinkActive="active" class="nav-link">Admin</a>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .top-nav {
      background: #2c3e50;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 60px;
    }

    .nav-brand h2 {
      color: #ecf0f1;
      margin: 0;
      font-weight: 600;
      font-size: 1.5rem;
    }

    .nav-links {
      display: flex;
      gap: 30px;
    }

    .nav-link {
      color: #bdc3c7;
      text-decoration: none;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      color: #ecf0f1;
      background: rgba(255,255,255,0.1);
    }

    .nav-link.active {
      color: #3498db;
      background: rgba(52,152,219,0.2);
    }

    .main-content {
      min-height: calc(100vh - 60px);
      background: #f8f9fa;
      padding: 20px 0;
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        height: auto;
        padding: 15px 20px;
      }
      
      .nav-links {
        margin-top: 15px;
        gap: 20px;
      }
      
      .main-content {
        padding: 15px 0;
      }
    }
  `]
})
export class AppComponent {
  title = 'prototype-app';
}