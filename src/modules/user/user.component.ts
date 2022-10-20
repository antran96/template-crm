import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public showDialog: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  addUsers(): void {
    this.showDialog = true
  }

  onClose(): void {
    this.showDialog = false
  }
}
