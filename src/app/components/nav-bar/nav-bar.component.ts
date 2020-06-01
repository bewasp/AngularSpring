import { Component, OnInit } from '@angular/core';
import {UserAccessService} from '../../services/auth/user-access.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: UserAccessService, public router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });

  }
}
