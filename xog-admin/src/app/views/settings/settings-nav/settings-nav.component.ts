import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-nav',
  templateUrl: './settings-nav.component.html',
  styleUrls: ['./settings-nav.component.scss']
})
export class SettingsNavComponent implements OnInit {

  @Input() menusOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
