import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="settings-container">
      <h1>Settings</h1>
    </div>
  `,
  styles: [`
    .settings-container {
      min-height: calc(100vh - 80px);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    h1 {
      color: white;
      font-size: 3rem;
      font-weight: 300;
      text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      margin: 0;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class SettingsComponent {
}