import { Component } from '@angular/core';
import { UserService } from './core/_service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carib Condominiums Portal';

  constructor(
    public userService: UserService,
  ) { }

  onLogout() {
    this.userService.logout();
  }
}
