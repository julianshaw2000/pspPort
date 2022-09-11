import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/_service/user.service';
// import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // imagSource = 'sunset1.png';
  imagSource = 'assets/sunset2.jpg';
  showMenu = false;
  user: string | undefined;

  constructor(
    public userService: UserService,

  ) { }

  ngOnInit(): void {


    // Date payment-amount reference-number

    //  this.userService.castUser$.subscribe(user => this.user = user);

    // var storedNames = JSON.parse(localStorage.getItem("login") || '');
    //   this.showMenu = storedNames == 'none' ? false : true;
  }

}
