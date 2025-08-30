import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inner-page-header',
  templateUrl: './inner-page-header.component.html',
  styleUrls: ['./inner-page-header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class InnerPageHeaderComponent {
  @Input() title: string = 'Page Title';

  @Input() breadcrumbs: { label: string; url?: string }[] = [
    { label: 'Home', url: '/' },
    { label: 'Contact', url: '/contact' },
  ];
}
