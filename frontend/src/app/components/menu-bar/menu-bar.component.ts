import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { User } from './../../classes/user';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit() {
      this.auth.refreshToken(); //Load user data after f5

  }
  

}
