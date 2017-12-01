import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {

    constructor(public auth : AuthService) {
        
    }
    
    ngOnInit() {
    }
    
}
