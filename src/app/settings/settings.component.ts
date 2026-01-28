import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  phone: string;
  jobTitle: string;
  department: string;
  location: string;
  timezone: string;
  language: string;
}

interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  marketing: boolean;
  updates: boolean;
  reminders: boolean;
}

interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'contacts';
  dataSharing: boolean;
  analytics: boolean;
  cookies: boolean;
  locationTracking: boolean;
}

interface AppearanceSettings {
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large';
  colorScheme: 'blue' | 'green' | 'purple' | 'orange';
  compactMode: boolean;
  animations: boolean;
}

interface SecuritySettings {
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
  sessionTimeout: number;
  passwordExpiry: number;
  deviceTrust: boolean;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-container">
      <div class="settings-sidebar">
        <h2>Settings</h2>
        <nav class="settings-nav">
          <button 
            *ngFor="let section of settingsSections" 
            class="nav-item"
            [class.active]="activeSection === section.id"
            (click)="activeSection = section.id">
            <i [class]="section.icon"></i>
            {{ section.name }}
          </button>
        </nav>
      </div>

      <div class="settings-content">
        <!-- Profile Section -->
        <div *ngIf="activeSection === 'profile'" class="section">
          <h3>Profile Information</h3>
          <div class="profile-header">
            <img [src]="userProfile.avatar" [alt]="userProfile.firstName" class="avatar-large">
            <div class="profile-info">
              <h4>{{ userProfile.firstName }} {{ userProfile.lastName }}</h4>
              <p>{{ userProfile.jobTitle }} • {{ userProfile.department }}</p>
            </div>
          </div>
          
          <div class="form-grid">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" [(ngModel)]="userProfile.firstName" class="form-control">
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" [(ngModel)]="userProfile.lastName" class="form-control">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="userProfile.email" class="form-control">
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="tel" [(ngModel)]="userProfile.phone" class="form-control">
            </div>
            <div class="form-group">
              <label>Job Title</label>
              <input type="text" [(ngModel)]="userProfile.jobTitle" class="form-control">
            </div>
            <div class="form-group">
              <label>Department</label>
              <select [(ngModel)]="userProfile.department" class="form-control">
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">Human Resources</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <div class="form-group">
              <label>Location</label>
              <input type="text" [(ngModel)]="userProfile.location" class="form-control">
            </div>
            <div class="form-group">
              <label>Timezone</label>
              <select [(ngModel)]="userProfile.timezone" class="form-control">
                <option value="PST">Pacific Standard Time</option>
                <option value="MST">Mountain Standard Time</option>
                <option value="CST">Central Standard Time</option>
                <option value="EST">Eastern Standard Time</option>
                <option value="GMT">Greenwich Mean Time</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Notifications Section -->
        <div *ngIf="activeSection === 'notifications'" class="section">
          <h3>Notification Preferences</h3>
          <div class="notification-groups">
            <div class="notification-group">
              <h4>Communication</h4>
              <div class="toggle-group">
                <label class="toggle">
                  <input type="checkbox" [(ngModel)]="notifications.email">
                  <span class="slider"></span>
                  Email Notifications
                </label>
                <label class="toggle">
                  <input type="checkbox" [(ngModel)]="notifications.sms">
                  <span class="slider"></span>
                  SMS Notifications
                </label>
                <label class="toggle">
                  <input type="checkbox" [(ngModel)]="notifications.push">
                  <span class="slider"></span>
                  Push Notifications
                </label>
              </div>
            </div>
            
            <div class="notification-group">
              <h4>Content</h4>
              <div class="toggle-group">
                <label class="toggle">
                  <input type="checkbox" [(ngModel)]="notifications.marketing">
                  <span class="slider"></span>
                  Marketing Updates
                </label>
                <label class="toggle">
                  <input type="checkbox" [(ngModel)]="notifications.updates">
                  <span class="slider"></span>
                  Product Updates
                </label>
                <label class="toggle">
                  <input type="checkbox" [(ngModel)]="notifications.reminders">
                  <span class="slider"></span>
                  Reminders
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Privacy Section -->
        <div *ngIf="activeSection === 'privacy'" class="section">
          <h3>Privacy & Data</h3>
          <div class="privacy-settings">
            <div class="form-group">
              <label>Profile Visibility</label>
              <select [(ngModel)]="privacy.profileVisibility" class="form-control">
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="contacts">Contacts Only</option>
              </select>
            </div>
            
            <div class="toggle-group">
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="privacy.dataSharing">
                <span class="slider"></span>
                Allow Data Sharing for Improvements
              </label>
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="privacy.analytics">
                <span class="slider"></span>
                Analytics & Performance Data
              </label>
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="privacy.cookies">
                <span class="slider"></span>
                Non-Essential Cookies
              </label>
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="privacy.locationTracking">
                <span class="slider"></span>
                Location Tracking
              </label>
            </div>
          </div>
        </div>

        <!-- Appearance Section -->
        <div *ngIf="activeSection === 'appearance'" class="section">
          <h3>Appearance</h3>
          <div class="appearance-settings">
            <div class="form-group">
              <label>Theme</label>
              <div class="theme-selector">
                <button 
                  *ngFor="let theme of ['light', 'dark', 'auto']"
                  class="theme-option"
                  [class.active]="appearance.theme === theme"
                  (click)="appearance.theme = theme">
                  {{ theme | titlecase }}
                </button>
              </div>
            </div>
            
            <div class="form-group">
              <label>Font Size</label>
              <div class="size-selector">
                <button 
                  *ngFor="let size of ['small', 'medium', 'large']"
                  class="size-option"
                  [class.active]="appearance.fontSize === size"
                  (click)="appearance.fontSize = size">
                  {{ size | titlecase }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label>Color Scheme</label>
              <div class="color-selector">
                <button 
                  *ngFor="let color of colorSchemes"
                  class="color-option"
                  [class.active]="appearance.colorScheme === color.value"
                  [style.background-color]="color.color"
                  (click)="appearance.colorScheme = color.value">
                </button>
              </div>
            </div>

            <div class="toggle-group">
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="appearance.compactMode">
                <span class="slider"></span>
                Compact Mode
              </label>
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="appearance.animations">
                <span class="slider"></span>
                Enable Animations
              </label>
            </div>
          </div>
        </div>

        <!-- Security Section -->
        <div *ngIf="activeSection === 'security'" class="section">
          <h3>Security</h3>
          <div class="security-settings">
            <div class="security-item">
              <div class="security-info">
                <h4>Two-Factor Authentication</h4>
                <p>Add an extra layer of security to your account</p>
              </div>
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="security.twoFactorEnabled">
                <span class="slider"></span>
              </label>
            </div>

            <div class="security-item">
              <div class="security-info">
                <h4>Login Alerts</h4>
                <p>Get notified when someone logs into your account</p>
              </div>
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="security.loginAlerts">
                <span class="slider"></span>
              </label>
            </div>

            <div class="security-item">
              <div class="security-info">
                <h4>Device Trust</h4>
                <p>Remember trusted devices</p>
              </div>
              <label class="toggle">
                <input type="checkbox" [(ngModel)]="security.deviceTrust">
                <span class="slider"></span>
              </label>
            </div>

            <div class="form-group">
              <label>Session Timeout (minutes)</label>
              <select [(ngModel)]="security.sessionTimeout" class="form-control">
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
                <option value="480">8 hours</option>
              </select>
            </div>

            <div class="form-group">
              <label>Password Expiry (days)</label>
              <select [(ngModel)]="security.passwordExpiry" class="form-control">
                <option value="30">30 days</option>
                <option value="60">60 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="0">Never</option>
              </select>
            </div>
          </div>
        </div>

        <div class="section-actions">
          <button class="btn btn-primary" (click)="saveSettings()">Save Changes</button>
          <button class="btn btn-secondary" (click)="resetSettings()">Reset to Default</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      display: flex;
      min-height: calc(100vh - 80px);
      background: #f5f5f5;
    }

    .settings-sidebar {
      width: 250px;
      background: white;
      border-right: 1px solid #e0e0e0;
      padding: 20px 0;
    }

    .settings-sidebar h2 {
      margin: 0 20px 20px;
      color: #333;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .settings-nav {
      display: flex;
      flex-direction: column;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      border: none;
      background: none;
      color: #666;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .nav-item:hover {
      background: #f0f0f0;
      color: #333;
    }

    .nav-item.active {
      background: #e3f2fd;
      color: #1976d2;
      border-right: 3px solid #1976d2;
    }

    .nav-item i {
      margin-right: 12px;
      width: 16px;
    }

    .settings-content {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }

    .section {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }

    .section h3 {
      margin: 0 0 24px;
      color: #333;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .profile-header {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      padding: 16px;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .avatar-large {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 16px;
    }

    .profile-info h4 {
      margin: 0 0 4px;
      color: #333;
    }

    .profile-info p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group label {
      margin-bottom: 6px;
      color: #333;
      font-weight: 500;
      font-size: 0.9rem;
    }

    .form-control {
      padding: 10px 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 0.9rem;
      transition: border-color 0.2s ease;
    }

    .form-control:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
    }

    .notification-groups {
      display: grid;
      gap: 24px;
    }

    .notification-group h4 {
      margin: 0 0 16px;
      color: #333;
      font-size: 1rem;
      font-weight: 500;
    }

    .toggle-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .toggle {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 0.9rem;
      color: #333;
    }

    .toggle input[type="checkbox"] {
      display: none;
    }

    .slider {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
      background: #ddd;
      border-radius: 12px;
      margin-right: 12px;
      transition: background-color 0.2s ease;
    }

    .slider:before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      transition: transform 0.2s ease;
    }

    .toggle input:checked + .slider {
      background: #1976d2;
    }

    .toggle input:checked + .slider:before {
      transform: translateX(20px);
    }

    .theme-selector, .size-selector {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }

    .theme-option, .size-option {
      padding: 8px 16px;
      border: 2px solid #ddd;
      border-radius: 6px;
      background: white;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .theme-option.active, .size-option.active {
      border-color: #1976d2;
      background: #e3f2fd;
      color: #1976d2;
    }

    .color-selector {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }

    .color-option {
      width: 32px;
      height: 32px;
      border: 2px solid #ddd;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .color-option.active {
      border-color: #333;
      transform: scale(1.1);
    }

    .security-settings {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .security-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }

    .security-info h4 {
      margin: 0 0 4px;
      color: #333;
      font-size: 1rem;
    }

    .security-info p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .section-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 24px;
    }

    .btn {
      padding: 10px 20px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: #1976d2;
      color: white;
    }

    .btn-primary:hover {
      background: #1565c0;
    }

    .btn-secondary {
      background: #f5f5f5;
      color: #333;
      border: 1px solid #ddd;
    }

    .btn-secondary:hover {
      background: #eeeeee;
    }

    @media (max-width: 768px) {
      .settings-container {
        flex-direction: column;
      }

      .settings-sidebar {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
      }

      .settings-nav {
        flex-direction: row;
        overflow-x: auto;
        padding: 0 20px;
      }

      .nav-item {
        white-space: nowrap;
        min-width: max-content;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SettingsComponent {
  activeSection = 'profile';

  settingsSections = [
    { id: 'profile', name: 'Profile', icon: 'fas fa-user' },
    { id: 'notifications', name: 'Notifications', icon: 'fas fa-bell' },
    { id: 'privacy', name: 'Privacy', icon: 'fas fa-shield-alt' },
    { id: 'appearance', name: 'Appearance', icon: 'fas fa-palette' },
    { id: 'security', name: 'Security', icon: 'fas fa-lock' }
  ];

  userProfile: UserProfile = {
    id: 'user-001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@company.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces',
    phone: '+1 (555) 123-4567',
    jobTitle: 'Senior Product Manager',
    department: 'Engineering',
    location: 'San Francisco, CA',
    timezone: 'PST',
    language: 'English'
  };

  notifications: NotificationSettings = {
    email: true,
    sms: false,
    push: true,
    marketing: false,
    updates: true,
    reminders: true
  };

  privacy: PrivacySettings = {
    profileVisibility: 'contacts',
    dataSharing: true,
    analytics: true,
    cookies: false,
    locationTracking: false
  };

  appearance: AppearanceSettings = {
    theme: 'light',
    fontSize: 'medium',
    colorScheme: 'blue',
    compactMode: false,
    animations: true
  };

  security: SecuritySettings = {
    twoFactorEnabled: true,
    loginAlerts: true,
    sessionTimeout: 60,
    passwordExpiry: 90,
    deviceTrust: true
  };

  colorSchemes = [
    { value: 'blue', color: '#1976d2' },
    { value: 'green', color: '#388e3c' },
    { value: 'purple', color: '#7b1fa2' },
    { value: 'orange', color: '#f57c00' }
  ];

  saveSettings() {
    // Simulate API call
    console.log('Saving settings...', {
      profile: this.userProfile,
      notifications: this.notifications,
      privacy: this.privacy,
      appearance: this.appearance,
      security: this.security
    });
    
    // Show success message (in real app, use a toast service)
    alert('Settings saved successfully!');
  }

  resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      // Reset to default values
      this.notifications = {
        email: true,
        sms: false,
        push: true,
        marketing: false,
        updates: true,
        reminders: true
      };

      this.privacy = {
        profileVisibility: 'contacts',
        dataSharing: true,
        analytics: true,
        cookies: false,
        locationTracking: false
      };

      this.appearance = {
        theme: 'light',
        fontSize: 'medium',
        colorScheme: 'blue',
        compactMode: false,
        animations: true
      };

      this.security = {
        twoFactorEnabled: false,
        loginAlerts: true,
        sessionTimeout: 60,
        passwordExpiry: 90,
        deviceTrust: true
      };

      alert('Settings reset to default values!');
    }
  }
}