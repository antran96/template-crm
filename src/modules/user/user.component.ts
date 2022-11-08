import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public showDialog: boolean = false
  headers: Array<any> = [
    { key: 'userName', title: 'User Name', show: true, type: 'text' },
    { key: 'fullName', title: 'Full Name', show: true, type: 'text' },
    { key: 'email', title: 'Email', show: true, type: 'text' },
    { key: 'role', title: 'Role', show: true, type: 'text' },
    { key: 'branch', title: 'Branch', show: true, type: 'text' }
  ]
  listData: Array<any> = [
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'Vũ Thị Bích', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Area Sales Manager', 'branch': 'HCM DSA'},
    {'userName': 'def', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc', 'fullName': 'Test ABC', 'email': 'testabc@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
  ]

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
