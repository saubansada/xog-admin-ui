import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/_services/authentication.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Input() open: boolean = false;

  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
