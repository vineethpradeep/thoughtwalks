import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'thoughtWalks';
}
