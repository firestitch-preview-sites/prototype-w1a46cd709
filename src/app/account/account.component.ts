import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="account-container">
      <div class="account-header">
        <h1>My Account</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div class="account-content">
        <div class="profile-card">
          <div class="profile-avatar">
            <div class="avatar-circle">
              <span>JD</span>
            </div>
          </div>
          
          <div class="profile-info">
            <h2>John Doe</h2>
            <p class="username">@john_doe_2024</p>
            
            <div class="info-grid">
              <div class="info-item">
                <label>Email</label>
                <span>john.doe@example.com</span>
              </div>
              
              <div class="info-item">
                <label>Full Name</label>
                <span>John Doe</span>
              </div>
              
              <div class="info-item">
                <label>Member Since</label>
                <span>January 15, 2023</span>
              </div>
              
              <div class="info-item">
                <label>Last Login</label>
                <span>Today, 2:34 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div class="actions-card">
          <h3>Account Actions</h3>
          <div class="action-buttons">
            <button class="btn btn-primary">Edit Profile</button>
            <button class="btn btn-secondary">Change Password</button>
            <button class="btn btn-outline">Privacy Settings</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .account-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      min-height: calc(100vh - 60px);
    }

    .account-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .account-header h1 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      font-weight: 300;
    }

    .account-header p {
      color: #7f8c8d;
      font-size: 1.1rem;
    }

    .account-content {
      display: grid;
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .profile-card, .actions-card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .profile-avatar {
      text-align: center;
      margin-bottom: 2rem;
    }

    .avatar-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      font-weight: bold;
    }

    .profile-info h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .username {
      text-align: center;
      color: #7f8c8d;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }

    .info-grid {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .info-item label {
      font-weight: 600;
      color: #34495e;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .info-item span {
      color: #2c3e50;
      font-size: 1rem;
    }

    .actions-card h3 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      border: none;
      font-size: 1rem;
    }

    .btn-primary {
      background: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background: #2980b9;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: #2ecc71;
      color: white;
    }

    .btn-secondary:hover {
      background: #27ae60;
      transform: translateY(-2px);
    }

    .btn-outline {
      background: transparent;
      color: #3498db;
      border: 2px solid #3498db;
    }

    .btn-outline:hover {
      background: #3498db;
      color: white;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .account-container {
        padding: 1rem;
      }
      
      .info-grid {
        grid-template-columns: 1fr;
      }
      
      .action-buttons {
        flex-direction: column;
      }
      
      .btn {
        width: 100%;
      }
    }
  `]
})
export class AccountComponent {
}