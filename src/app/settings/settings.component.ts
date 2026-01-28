import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="settings-container">
      <div class="settings-content">
        <h1>Settings</h1>
        <p>Settings page coming soon...</p>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      min-height: calc(100vh - 80px);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .settings-content {
      text-align: center;
      color: white;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 300;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    p {
      font-size: 1.2rem;
      opacity: 0.9;
      font-weight: 300;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }
      
      p {
        font-size: 1rem;
      }
    }
  `]
})
export class SettingsComponent {
}