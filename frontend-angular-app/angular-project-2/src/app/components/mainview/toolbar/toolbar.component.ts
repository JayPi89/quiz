import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() isExpandedEvent = new EventEmitter<boolean>();
  isExpanded: boolean = false;
  isLoggedIn: boolean = false;
  name: string;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.isExpandedEvent.emit(this.isExpanded);
  }

  loginUser(username: string) {
    this.userService.logUserIn(username);
    this.name = this.name;
    this.isLoggedIn = true;
  }

}
