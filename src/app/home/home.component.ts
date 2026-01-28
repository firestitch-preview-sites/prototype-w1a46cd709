import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div class="hero-section">
        <h1>Welcome to Our Application</h1>
        <p class="lead">Your gateway to seamless user management and account administration.</p>
      </div>
      
      <div class="features">
        <div class="feature-card">
          <h3>Account Management</h3>
          <p>Access and manage your personal account information, update your profile, and maintain your preferences.</p>
          <a routerLink="/account" class="btn btn-primary">View Account</a>
        </div>
        
        <div class="feature-card">
          <h3>Admin Dashboard</h3>
          <p>Comprehensive user management tools for administrators to oversee and manage all user accounts.</p>
          <a routerLink="/admin" class="btn btn-secondary">Admin Panel</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .hero-section {
      text-align: center;
      margin-bottom: 3rem;
      padding: 3rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 15px;
      margin-bottom: 2rem;
    }

    .hero-section h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .lead {
      font-size: 1.25rem;
      margin-bottom: 0;
      opacity: 0.9;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .feature-card h3 {
      color: #2d3748;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .feature-card p {
      color: #4a5568;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s;
      border: none;
      cursor: pointer;
    }

    .btn-primary {
      background-color: #4299e1;
      color: white;
    }

    .btn-primary:hover {
      background-color: #3182ce;
      transform: translateY(-1px);
    }

    .btn-secondary {
      background-color: #718096;
      color: white;
    }

    .btn-secondary:hover {
      background-color: #4a5568;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2rem;
      }
      
      .container {
        padding: 1rem;
      }
      
      .features {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent { }