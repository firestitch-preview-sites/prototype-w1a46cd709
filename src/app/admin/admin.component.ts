import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-container">
      <h1>User Management</h1>
      <p class="subtitle">Manage system users and their permissions</p>
      
      <div class="users-header">
        <div class="user-count">
          <span class="count">{{ users.length }}</span> Total Users
        </div>
        <button class="add-user-btn">+ Add New User</button>
      </div>

      <div class="users-table">
        <div class="table-header">
          <div class="header-cell">Avatar</div>
          <div class="header-cell">Name</div>
          <div class="header-cell">Email</div>
          <div class="header-cell">Role</div>
          <div class="header-cell">Status</div>
          <div class="header-cell">Last Login</div>
          <div class="header-cell">Actions</div>
        </div>
        
        <div class="table-row" *ngFor="let user of users">
          <div class="table-cell">
            <div class="avatar" [style.background-color]="user.avatarColor">
              {{ user.initials }}
            </div>
          </div>
          <div class="table-cell">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-id">ID: {{ user.id }}</div>
          </div>
          <div class="table-cell">{{ user.email }}</div>
          <div class="table-cell">
            <span class="role-badge" [class]="'role-' + user.role.toLowerCase()">
              {{ user.role }}
            </span>
          </div>
          <div class="table-cell">
            <span class="status-badge" [class]="'status-' + user.status.toLowerCase()">
              {{ user.status }}
            </span>
          </div>
          <div class="table-cell">{{ user.lastLogin }}</div>
          <div class="table-cell">
            <button class="action-btn edit">Edit</button>
            <button class="action-btn delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 5px;
      font-size: 2.2rem;
      font-weight: 600;
    }

    .subtitle {
      color: #7f8c8d;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }

    .users-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      padding: 15px 0;
      border-bottom: 2px solid #ecf0f1;
    }

    .user-count {
      font-size: 1.1rem;
      color: #34495e;
    }

    .count {
      font-weight: bold;
      color: #3498db;
      font-size: 1.3rem;
    }

    .add-user-btn {
      background: #27ae60;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.3s;
    }

    .add-user-btn:hover {
      background: #219a52;
    }

    .users-table {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .table-header {
      display: grid;
      grid-template-columns: 80px 200px 250px 120px 100px 150px 150px;
      background: #f8f9fa;
      border-bottom: 2px solid #dee2e6;
    }

    .header-cell {
      padding: 15px 10px;
      font-weight: 600;
      color: #495057;
      text-align: left;
    }

    .table-row {
      display: grid;
      grid-template-columns: 80px 200px 250px 120px 100px 150px 150px;
      border-bottom: 1px solid #dee2e6;
      transition: background 0.2s;
    }

    .table-row:hover {
      background: #f8f9fa;
    }

    .table-cell {
      padding: 15px 10px;
      display: flex;
      align-items: center;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }

    .user-name {
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 2px;
    }

    .user-id {
      font-size: 0.85rem;
      color: #7f8c8d;
    }

    .role-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .role-admin {
      background: #e74c3c;
      color: white;
    }

    .role-manager {
      background: #f39c12;
      color: white;
    }

    .role-user {
      background: #3498db;
      color: white;
    }

    .role-editor {
      background: #9b59b6;
      color: white;
    }

    .status-badge {
      padding: 4px 10px;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .status-active {
      background: #d5f4e6;
      color: #27ae60;
    }

    .status-inactive {
      background: #fadbd8;
      color: #e74c3c;
    }

    .status-pending {
      background: #fef9e7;
      color: #f39c12;
    }

    .action-btn {
      padding: 5px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      margin-right: 5px;
      transition: all 0.2s;
    }

    .edit {
      background: #3498db;
      color: white;
    }

    .edit:hover {
      background: #2980b9;
    }

    .delete {
      background: #e74c3c;
      color: white;
    }

    .delete:hover {
      background: #c0392b;
    }

    @media (max-width: 768px) {
      .table-header,
      .table-row {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      
      .header-cell,
      .table-cell {
        border-bottom: 1px solid #eee;
        padding: 10px;
      }
      
      .table-cell:before {
        content: attr(data-label);
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
      }
    }
  `]
})
export class AdminComponent {
  users = [
    {
      id: 'USR-001',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2 hours ago',
      initials: 'SJ',
      avatarColor: '#e74c3c'
    },
    {
      id: 'USR-002',
      name: 'Michael Chen',
      email: 'michael.chen@company.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '1 day ago',
      initials: 'MC',
      avatarColor: '#3498db'
    },
    {
      id: 'USR-003',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@company.com',
      role: 'User',
      status: 'Active',
      lastLogin: '3 hours ago',
      initials: 'ER',
      avatarColor: '#27ae60'
    },
    {
      id: 'USR-004',
      name: 'David Wilson',
      email: 'david.wilson@company.com',
      role: 'Editor',
      status: 'Inactive',
      lastLogin: '1 week ago',
      initials: 'DW',
      avatarColor: '#9b59b6'
    },
    {
      id: 'USR-005',
      name: 'Lisa Thompson',
      email: 'lisa.thompson@company.com',
      role: 'User',
      status: 'Active',
      lastLogin: '5 minutes ago',
      initials: 'LT',
      avatarColor: '#f39c12'
    },
    {
      id: 'USR-006',
      name: 'James Martinez',
      email: 'james.martinez@company.com',
      role: 'Manager',
      status: 'Pending',
      lastLogin: 'Never',
      initials: 'JM',
      avatarColor: '#34495e'
    },
    {
      id: 'USR-007',
      name: 'Amanda Foster',
      email: 'amanda.foster@company.com',
      role: 'User',
      status: 'Active',
      lastLogin: '30 minutes ago',
      initials: 'AF',
      avatarColor: '#e67e22'
    },
    {
      id: 'USR-008',
      name: 'Robert Kim',
      email: 'robert.kim@company.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '1 hour ago',
      initials: 'RK',
      avatarColor: '#8e44ad'
    }
  ];
}