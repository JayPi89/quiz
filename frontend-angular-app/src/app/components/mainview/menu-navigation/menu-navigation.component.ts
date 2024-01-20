import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss']
})
export class MenuNavigationComponent implements OnInit {

  @Input() isExpanded : boolean = false;
  @Output() isExpandedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.isExpandedEvent.emit(this.isExpanded);
  }

}
