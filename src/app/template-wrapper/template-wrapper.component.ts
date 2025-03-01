import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-wrapper.component.html',
  styleUrl: './template-wrapper.component.css',
})
export class TemplateWrapperComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
