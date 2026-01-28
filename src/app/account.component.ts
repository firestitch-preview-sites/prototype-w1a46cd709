import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="account-container">
      <h1>My Account</h1>
      
      <div class="profile-section">
        <h2>Profile Information</h2>
        <div class="info-card">
          <div class="info-row">
            <label>Username:</label>
            <span>{{ userProfile.username }}</span>
          </div>
          <div class="info-row">
            <label>Email:</label>
            <span>{{ userProfile.email }}</span>
          </div>
          <div class="info-row">
            <label>Full Name:</label>
            <span>{{ userProfile.fullName }}</span>
          </div>
          <div class="info-row">
            <label>Member Since:</label>
            <span>{{ userProfile.memberSince }}</span>
          </div>
          <div class="info-row">
            <label>Last Login:</label>
            <span>{{ userProfile.lastLogin }}</span>
          </div>
        </div>
        
        <div class="actions">
          <button class="btn-primary">Edit Profile</button>
          <button class="btn-secondary">Change Password</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .account-container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      color: #333;
      margin-bottom: 30px;
    }

    h2 {
      color: #666;
      margin-bottom: 15px;
    }

    .profile-section {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .info-card {
      background: white;
      padding: 20px;
      border-radius: 6px;
      margin-bottom: 20px;
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
    }

    .info-row:last-child {
      border-bottom: none;
    }

    .info-row label {
      font-weight: bold;
      color: #555;
      min-width: 120px;
    }

    .info-row span {
      color: #333;
    }

    .actions {
      display: flex;
      gap: 10px;
    }

    .btn-primary, .btn-secondary {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.2s;
    }

    .btn-primary {
      background-color: #007bff;
      color: white;
    }

    .btn-primary:hover {
      background-color: #0056b3;
    }

    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }

    .btn-secondary:hover {
      background-color: #545b62;
    }
  `]
})
export class AccountComponent {
  userProfile = {
    username: 'john_doe_2024',
    email: 'john.doe@example.com',
    fullName: 'John Doe',
    memberSince: 'January 15, 2023',
    lastLogin: 'Today, 2:34 PM'
  };
}