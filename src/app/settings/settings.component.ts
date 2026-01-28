import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SettingsData {
  profile: {
    name: string;
    email: string;
    company: string;
    timezone: string;
  };
  notifications: {
    emailUpdates: boolean;
    pushNotifications: boolean;
    weeklyReport: boolean;
  };
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    dateFormat: string;
  };
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-container">
      <div class="settings-header">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div class="settings-content">
        <!-- Profile Settings -->
        <div class="settings-section">
          <h2>Profile</h2>
          <div class="settings-group">
            <div class="form-field">
              <label for="name">Name</label>
              <input 
                id="name" 
                type="text" 
                [(ngModel)]="settings.profile.name"
                class="form-input">
            </div>
            <div class="form-field">
              <label for="email">Email</label>
              <input 
                id="email" 
                type="email" 
                [(ngModel)]="settings.profile.email"
                class="form-input">
            </div>
            <div class="form-field">
              <label for="company">Company</label>
              <input 
                id="company" 
                type="text" 
                [(ngModel)]="settings.profile.company"
                class="form-input">
            </div>
            <div class="form-field">
              <label for="timezone">Timezone</label>
              <select id="timezone" [(ngModel)]="settings.profile.timezone" class="form-input">
                <option value="UTC-8">Pacific Time (UTC-8)</option>
                <option value="UTC-5">Eastern Time (UTC-5)</option>
                <option value="UTC+0">UTC (UTC+0)</option>
                <option value="UTC+1">Central European (UTC+1)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="settings-section">
          <h2>Notifications</h2>
          <div class="settings-group">
            <div class="checkbox-field">
              <input 
                id="emailUpdates" 
                type="checkbox" 
                [(ngModel)]="settings.notifications.emailUpdates">
              <label for="emailUpdates">Email updates</label>
            </div>
            <div class="checkbox-field">
              <input 
                id="pushNotifications" 
                type="checkbox" 
                [(ngModel)]="settings.notifications.pushNotifications">
              <label for="pushNotifications">Push notifications</label>
            </div>
            <div class="checkbox-field">
              <input 
                id="weeklyReport" 
                type="checkbox" 
                [(ngModel)]="settings.notifications.weeklyReport">
              <label for="weeklyReport">Weekly report</label>
            </div>
          </div>
        </div>

        <!-- Preference Settings -->
        <div class="settings-section">
          <h2>Preferences</h2>
          <div class="settings-group">
            <div class="form-field">
              <label for="theme">Theme</label>
              <select id="theme" [(ngModel)]="settings.preferences.theme" class="form-input">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div class="form-field">
              <label for="language">Language</label>
              <select id="language" [(ngModel)]="settings.preferences.language" class="form-input">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div class="form-field">
              <label for="dateFormat">Date Format</label>
              <select id="dateFormat" [(ngModel)]="settings.preferences.dateFormat" class="form-input">
                <option value="MM/dd/yyyy">MM/DD/YYYY</option>
                <option value="dd/MM/yyyy">DD/MM/YYYY</option>
                <option value="yyyy-MM-dd">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="settings-actions">
          <button class="btn btn-primary" (click)="saveSettings()">Save Changes</button>
          <button class="btn btn-secondary" (click)="resetSettings()">Reset to Default</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .settings-header {
      margin-bottom: 30px;
    }

    .settings-header h1 {
      margin: 0 0 8px;
      color: #333;
      font-size: 2rem;
      font-weight: 600;
    }

    .settings-header p {
      margin: 0;
      color: #666;
      font-size: 1.1rem;
    }

    .settings-content {
      background: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .settings-section {
      margin-bottom: 40px;
    }

    .settings-section:last-of-type {
      margin-bottom: 30px;
    }

    .settings-section h2 {
      margin: 0 0 20px;
      color: #333;
      font-size: 1.3rem;
      font-weight: 500;
      border-bottom: 2px solid #e0e0e0;
      padding-bottom: 8px;
    }

    .settings-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-field label {
      font-weight: 500;
      color: #555;
      font-size: 0.95rem;
    }

    .form-input {
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.2s;
    }

    .form-input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    .checkbox-field {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .checkbox-field input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #007bff;
    }

    .checkbox-field label {
      color: #555;
      font-size: 1rem;
      cursor: pointer;
    }

    .settings-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-start;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }

    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
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

    @media (max-width: 768px) {
      .settings-container {
        padding: 15px;
      }

      .settings-content {
        padding: 20px;
      }

      .settings-actions {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class SettingsComponent {
  settings: SettingsData = {
    profile: {
      name: 'John Smith',
      email: 'john.smith@company.com',
      company: 'Acme Corporation',
      timezone: 'UTC-8'
    },
    notifications: {
      emailUpdates: true,
      pushNotifications: false,
      weeklyReport: true
    },
    preferences: {
      theme: 'light',
      language: 'en',
      dateFormat: 'MM/dd/yyyy'
    }
  };

  saveSettings(): void {
    // Mock save functionality
    console.log('Saving settings:', this.settings);
    alert('Settings saved successfully!');
  }

  resetSettings(): void {
    // Reset to default values
    this.settings = {
      profile: {
        name: '',
        email: '',
        company: '',
        timezone: 'UTC-8'
      },
      notifications: {
        emailUpdates: true,
        pushNotifications: false,
        weeklyReport: false
      },
      preferences: {
        theme: 'light',
        language: 'en',
        dateFormat: 'MM/dd/yyyy'
      }
    };
    console.log('Settings reset to default');
    alert('Settings reset to default values!');
  }
}