import { Component } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
})
export class NavHeaderComponent {
  contactInfoList: any[] = [];

  constructor(private contactInfoDI: UserDataService) {
    this.contactInfoList = this.contactInfoDI.getContactInfo();
  }
}
