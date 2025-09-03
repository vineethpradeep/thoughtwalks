import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InnerPageHeaderComponent } from '../../components/inner-page-header/inner-page-header.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ReactiveFormsModule, InnerPageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
