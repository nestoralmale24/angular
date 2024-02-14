import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styles: ``,
})

export class AppComponent {
  city = 'Zaragoza';
}
