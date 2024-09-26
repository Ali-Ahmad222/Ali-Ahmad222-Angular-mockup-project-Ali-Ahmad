import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface LitigationElement {
  assignee: string;
  building: string;
  apt: string;
  tenant: string;
  leaseStart: string;
  litigation: string;
  talCase: string;
  status: string;
  priority: string;
  proofOfNotification: string;
  conciliation: string;
  hearing: string;
}

// Sample data to display in the table (replace with actual data later)
const LITIGATION_DATA: LitigationElement[] = [
  { assignee: 'HA', building: 'Ab propp', apt: '121212', tenant: 'hamayun owner', leaseStart: '1-AUG-24', litigation: 'Death of tenant', talCase: '821792...', status: 'Draft', priority: '', proofOfNotification: '', conciliation: '', hearing: '' },
  { assignee: 'HA', building: 'Ab propp', apt: '987', tenant: 'Hamayun superAdmin', leaseStart: '1-AUG-24', litigation: 'Non-payment of rent', talCase: '', status: 'Draft', priority: '', proofOfNotification: '', conciliation: 'refused', hearing: '' },
  { assignee: 'DH', building: 'asas', apt: '343', tenant: 'Hamayun owner', leaseStart: '25-JAN-24', litigation: 'Behavioral issues', talCase: '', status: 'Submitted', priority: '', proofOfNotification: '', conciliation: '14-Aug 24', hearing: '30-Aug 24' },
  // Add more rows as needed
];
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  displayedColumns: string[] = ['select', 'assignee', 'building', 'apt', 'tenant', 'leaseStart', 'litigation', 'talCase', 'status', 'priority', 'proofOfNotification', 'conciliation', 'hearing'];
  dataSource = new MatTableDataSource<LitigationElement>(LITIGATION_DATA);
  

   // Method to return a class based on assignee value
   getAssigneeClass(assignee: string): string {
    switch (assignee) {
      case 'HA': return 'ha-class';
      case 'DH': return 'dh-class';
      case 'UR': return 'ur-class';
      default: return '';
    }
  }
}
