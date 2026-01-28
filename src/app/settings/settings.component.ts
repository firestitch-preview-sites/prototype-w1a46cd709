import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings-container">
      <div class="settings-header">
        <h1>Settings</h1>
        <p>Manage your account preferences and system configuration</p>
      </div>

      <div class="settings-grid">
        <!-- Account Settings -->
        <div class="settings-section">
          <h2>📧 Account Settings</h2>
          <div class="setting-item">
            <label>Email Address</label>
            <div class="setting-value">
              <span>john.doe@example.com</span>
              <button class="btn-link">Change</button>
            </div>
          </div>
          <div class="setting-item">
            <label>Phone Number</label>
            <div class="setting-value">
              <span>+1 (555) 123-4567</span>
              <button class="btn-link">Change</button>
            </div>
          </div>
          <div class="setting-item">
            <label>Two-Factor Authentication</label>
            <div class="setting-value">
              <input type="checkbox" [checked]="settings.twoFactor" (change)="toggleSetting('twoFactor')">
              <span class="status-badge" [class.enabled]="settings.twoFactor">{{settings.twoFactor ? 'Enabled' : 'Disabled'}}</span>
            </div>
          </div>
          <div class="setting-item">
            <label>Password</label>
            <div class="setting-value">
              <span>Last changed 30 days ago</span>
              <button class="btn-link">Change Password</button>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="settings-section">
          <h2>🔔 Notification Settings</h2>
          <div class="setting-item">
            <label>Email Notifications</label>
            <input type="checkbox" [checked]="settings.emailNotifications" (change)="toggleSetting('emailNotifications')">
          </div>
          <div class="setting-item">
            <label>Push Notifications</label>
            <input type="checkbox" [checked]="settings.pushNotifications" (change)="toggleSetting('pushNotifications')">
          </div>
          <div class="setting-item">
            <label>SMS Notifications</label>
            <input type="checkbox" [checked]="settings.smsNotifications" (change)="toggleSetting('smsNotifications')">
          </div>
          <div class="setting-item">
            <label>Marketing Emails</label>
            <input type="checkbox" [checked]="settings.marketingEmails" (change)="toggleSetting('marketingEmails')">
          </div>
        </div>

        <!-- Appearance Settings -->
        <div class="settings-section">
          <h2>🎨 Appearance Settings</h2>
          <div class="setting-item">
            <label>Theme</label>
            <select [(ngModel)]="settings.theme" class="select-input">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Language</label>
            <select [(ngModel)]="settings.language" class="select-input">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Timezone</label>
            <select [(ngModel)]="settings.timezone" class="select-input">
              <option value="EST">Eastern (EST)</option>
              <option value="PST">Pacific (PST)</option>
              <option value="GMT">GMT</option>
              <option value="CET">Central European (CET)</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Font Size</label>
            <select [(ngModel)]="settings.fontSize" class="select-input">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        <!-- Privacy Settings -->
        <div class="settings-section">
          <h2>🔒 Privacy Settings</h2>
          <div class="setting-item">
            <label>Profile Visibility</label>
            <input type="checkbox" [checked]="settings.profileVisibility" (change)="toggleSetting('profileVisibility')">
            <span class="help-text">Make your profile visible to other users</span>
          </div>
          <div class="setting-item">
            <label>Show Online Status</label>
            <input type="checkbox" [checked]="settings.onlineStatus" (change)="toggleSetting('onlineStatus')">
          </div>
          <div class="setting-item">
            <label>Allow Friend Requests</label>
            <input type="checkbox" [checked]="settings.friendRequests" (change)="toggleSetting('friendRequests')">
          </div>
          <div class="setting-item">
            <label>Data Sharing</label>
            <input type="checkbox" [checked]="settings.dataSharing" (change)="toggleSetting('dataSharing')">
            <span class="help-text">Share anonymous usage data to improve our services</span>
          </div>
        </div>

        <!-- Security Settings -->
        <div class="settings-section">
          <h2>🔐 Security Settings</h2>
          <div class="setting-item">
            <label>Recent Login Activity</label>
            <div class="login-history">
              <div class="login-item" *ngFor="let login of loginHistory">
                <div class="login-info">
                  <strong>{{login.location}}</strong>
                  <span class="login-time">{{login.time}}</span>
                </div>
                <span class="login-device">{{login.device}}</span>
              </div>
            </div>
          </div>
          <div class="setting-item">
            <label>Active Sessions</label>
            <div class="session-list">
              <div class="session-item" *ngFor="let session of activeSessions">
                <div class="session-info">
                  <strong>{{session.device}}</strong>
                  <span class="session-location">{{session.location}}</span>
                </div>
                <button class="btn-danger-small">Revoke</button>
              </div>
            </div>
          </div>
          <div class="setting-item">
            <label>API Keys</label>
            <div class="api-keys">
              <div class="api-key" *ngFor="let key of apiKeys">
                <div class="key-info">
                  <strong>{{key.name}}</strong>
                  <span class="key-usage">{{key.usage}} calls this month</span>
                </div>
                <button class="btn-link">Regenerate</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Usage & Analytics -->
        <div class="settings-section">
          <h2>📊 Usage & Analytics</h2>
          <div class="setting-item">
            <label>Storage Used</label>
            <div class="usage-bar">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="storageUsage.percentage"></div>
              </div>
              <span class="usage-text">{{storageUsage.used}} of {{storageUsage.total}}</span>
            </div>
          </div>
          <div class="setting-item">
            <label>API Calls This Month</label>
            <div class="usage-bar">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="apiUsage.percentage"></div>
              </div>
              <span class="usage-text">{{apiUsage.used}} of {{apiUsage.total}}</span>
            </div>
          </div>
          <div class="setting-item">
            <label>Data Transfer</label>
            <div class="setting-value">
              <span>15.3 GB this month</span>
            </div>
          </div>
          <div class="setting-item">
            <label>Active Projects</label>
            <div class="setting-value">
              <span>8 projects</span>
              <button class="btn-link">Manage</button>
            </div>
          </div>
        </div>

        <!-- Billing Settings -->
        <div class="settings-section">
          <h2>💳 Billing Settings</h2>
          <div class="setting-item">
            <label>Current Plan</label>
            <div class="setting-value">
              <span class="plan-badge">Pro Plan - $29/month</span>
              <button class="btn-link">Upgrade</button>
            </div>
          </div>
          <div class="setting-item">
            <label>Payment Method</label>
            <div class="setting-value">
              <span>****1234 (Visa)</span>
              <button class="btn-link">Update</button>
            </div>
          </div>
          <div class="setting-item">
            <label>Next Billing Date</label>
            <div class="setting-value">
              <span>March 15, 2024</span>
            </div>
          </div>
          <div class="setting-item">
            <label>Auto-renewal</label>
            <input type="checkbox" [checked]="settings.autoRenewal" (change)="toggleSetting('autoRenewal')">
          </div>
        </div>

        <!-- Integrations -->
        <div class="settings-section">
          <h2>🔗 Integrations</h2>
          <div class="setting-item">
            <label>Connected Accounts</label>
            <div class="connected-accounts">
              <div class="account-item" *ngFor="let account of connectedAccounts">
                <div class="account-info">
                  <strong>{{account.name}}</strong>
                  <span class="account-status" [class.connected]="account.connected">{{account.connected ? 'Connected' : 'Disconnected'}}</span>
                </div>
                <button class="btn-link">{{account.connected ? 'Disconnect' : 'Connect'}}</button>
              </div>
            </div>
          </div>
          <div class="setting-item">
            <label>Webhooks</label>
            <div class="webhook-list">
              <div class="webhook-item" *ngFor="let webhook of webhooks">
                <div class="webhook-info">
                  <strong>{{webhook.name}}</strong>
                  <span class="webhook-url">{{webhook.url}}</span>
                </div>
                <button class="btn-link">Edit</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Advanced Settings -->
        <div class="settings-section">
          <h2>🎯 Advanced Settings</h2>
          <div class="setting-item">
            <label>Developer Mode</label>
            <input type="checkbox" [checked]="settings.developerMode" (change)="toggleSetting('developerMode')">
            <span class="help-text">Enable advanced developer features and debugging tools</span>
          </div>
          <div class="setting-item">
            <label>Beta Features</label>
            <input type="checkbox" [checked]="settings.betaFeatures" (change)="toggleSetting('betaFeatures')">
            <span class="help-text">Get early access to experimental features</span>
          </div>
          <div class="setting-item">
            <label>Debug Logging</label>
            <input type="checkbox" [checked]="settings.debugLogging" (change)="toggleSetting('debugLogging')">
          </div>
          <div class="setting-item">
            <label>Performance Monitoring</label>
            <input type="checkbox" [checked]="settings.performanceMonitoring" (change)="toggleSetting('performanceMonitoring')">
          </div>
        </div>
      </div>

      <div class="settings-footer">
        <button class="btn-primary">Save All Changes</button>
        <button class="btn-secondary">Reset to Defaults</button>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      min-height: calc(100vh - 80px);
      background: #f8f9fa;
      padding: 20px;
    }

    .settings-header {
      text-align: center;
      margin-bottom: 40px;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
    }

    .settings-header h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      font-weight: 300;
    }

    .settings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 25px;
      margin-bottom: 40px;
    }

    .settings-section {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .settings-section h2 {
      color: #333;
      margin-bottom: 20px;
      font-size: 1.3rem;
      font-weight: 600;
      padding-bottom: 10px;
      border-bottom: 2px solid #eee;
    }

    .setting-item {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .setting-item label {
      font-weight: 600;
      color: #555;
      font-size: 14px;
    }

    .setting-value {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .select-input {
      padding: 8px 12px;
      border: 2px solid #e1e1e1;
      border-radius: 6px;
      font-size: 14px;
      background: white;
    }

    .select-input:focus {
      outline: none;
      border-color: #667eea;
    }

    .btn-link {
      background: none;
      border: none;
      color: #667eea;
      cursor: pointer;
      text-decoration: underline;
      font-size: 12px;
      padding: 4px 8px;
    }

    .btn-link:hover {
      color: #5a67d8;
    }

    .btn-danger-small {
      background: #e53e3e;
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
    }

    .status-badge {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      background: #f7fafc;
      color: #718096;
    }

    .status-badge.enabled {
      background: #c6f6d5;
      color: #22543d;
    }

    .plan-badge {
      background: #667eea;
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
    }

    .help-text {
      font-size: 12px;
      color: #718096;
      margin-left: 10px;
    }

    .login-history, .session-list, .api-keys, .connected-accounts, .webhook-list {
      background: #f7fafc;
      border-radius: 8px;
      padding: 15px;
    }

    .login-item, .session-item, .api-key, .account-item, .webhook-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #e2e8f0;
    }

    .login-item:last-child, .session-item:last-child, .api-key:last-child, 
    .account-item:last-child, .webhook-item:last-child {
      border-bottom: none;
    }

    .login-info, .session-info, .key-info, .account-info, .webhook-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .login-time, .session-location, .key-usage, .account-status, .webhook-url {
      font-size: 12px;
      color: #718096;
    }

    .account-status.connected {
      color: #22543d;
      font-weight: 600;
    }

    .usage-bar {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.3s ease;
    }

    .usage-text {
      font-size: 12px;
      color: #718096;
    }

    .settings-footer {
      text-align: center;
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .btn-primary, .btn-secondary {
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      margin: 0 10px;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: #f7fafc;
      color: #4a5568;
      border: 2px solid #e2e8f0;
    }

    .btn-secondary:hover {
      background: #edf2f7;
      border-color: #cbd5e0;
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #667eea;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .settings-grid {
        grid-template-columns: 1fr;
      }
      
      .settings-header h1 {
        font-size: 2rem;
      }
      
      .setting-value {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class SettingsComponent {
  settings = {
    twoFactor: true,
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    marketingEmails: false,
    theme: 'light',
    language: 'en',
    timezone: 'EST',
    fontSize: 'medium',
    profileVisibility: true,
    onlineStatus: true,
    friendRequests: true,
    dataSharing: false,
    autoRenewal: true,
    developerMode: false,
    betaFeatures: true,
    debugLogging: false,
    performanceMonitoring: true
  };

  loginHistory = [
    { location: 'New York, NY', time: '2 hours ago', device: 'Chrome on Windows' },
    { location: 'Los Angeles, CA', time: '1 day ago', device: 'Safari on iPhone' },
    { location: 'Chicago, IL', time: '3 days ago', device: 'Chrome on Mac' }
  ];

  activeSessions = [
    { device: 'Web Browser', location: 'New York, NY' },
    { device: 'Mobile App', location: 'Los Angeles, CA' },
    { device: 'Tablet', location: 'Chicago, IL' }
  ];

  apiKeys = [
    { name: 'Production API', usage: '1,247' },
    { name: 'Development API', usage: '342' }
  ];

  storageUsage = {
    used: '2.5 GB',
    total: '10 GB',
    percentage: 25
  };

  apiUsage = {
    used: '1,247',
    total: '10,000',
    percentage: 12.47
  };

  connectedAccounts = [
    { name: 'Google', connected: true },
    { name: 'GitHub', connected: true },
    { name: 'Slack', connected: false },
    { name: 'Microsoft', connected: true }
  ];

  webhooks = [
    { name: 'Production Webhook', url: 'https://api.example.com/webhook' },
    { name: 'Development Webhook', url: 'https://dev.example.com/webhook' }
  ];

  toggleSetting(setting: string) {
    (this.settings as any)[setting] = !(this.settings as any)[setting];
  }
}