import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public showDialog: boolean = false
  headers: Array<any> = [
    { key: 'userName', title: 'User Name', show: true },
    { key: 'fullName', title: 'Full Name', show: true },
    { key: 'email', title: 'Email', show: true },
    { key: 'role', title: 'Role', show: true },
    { key: 'branch', title: 'Branch', show: true }
  ]
  listData: Array<any> = [
    {'userName': 'testabc1', 'fullName': 'Test ABC', 'email': 'testabc1@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc2', 'fullName': 'Test ABC', 'email': 'testabc2@gmail.com', 'role': 'FS-Area Sales Manager', 'branch': 'HCM DSA'},
    {'userName': 'testabc3', 'fullName': 'Test ABC', 'email': 'testabc3@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc4', 'fullName': 'Test ABC', 'email': 'testabc4@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc5', 'fullName': 'Test ABC', 'email': 'testabc5@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc6', 'fullName': 'Test ABC', 'email': 'testabc6@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc7', 'fullName': 'Test ABC', 'email': 'testabc7@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc8', 'fullName': 'Test ABC', 'email': 'testabc8@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc9', 'fullName': 'Test ABC', 'email': 'testabc9@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc10', 'fullName': 'Test ABC', 'email': 'testabc10@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc11', 'fullName': 'Test ABC', 'email': 'testabc11@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc12', 'fullName': 'Test ABC', 'email': 'testabc12@gmail.com', 'role': 'FS-Area Sales Manager', 'branch': 'HCM DSA'},
    {'userName': 'testabc13', 'fullName': 'Test ABC', 'email': 'testabc13@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc14', 'fullName': 'Test ABC', 'email': 'testabc14@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc15', 'fullName': 'Test ABC', 'email': 'testabc15@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc16', 'fullName': 'Test ABC', 'email': 'testabc16@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc17', 'fullName': 'Test ABC', 'email': 'testabc17@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc18', 'fullName': 'Test ABC', 'email': 'testabc18@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc19', 'fullName': 'Test ABC', 'email': 'testabc19@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc20', 'fullName': 'Test ABC', 'email': 'testabc20@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc21', 'fullName': 'Test ABC', 'email': 'testabc21@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc22', 'fullName': 'Test ABC', 'email': 'testabc22@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc23', 'fullName': 'Test ABC', 'email': 'testabc23@gmail.com', 'role': 'FS-Area Sales Manager', 'branch': 'HCM DSA'},
    {'userName': 'testabc24', 'fullName': 'Test ABC', 'email': 'testabc24@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc25', 'fullName': 'Test ABC', 'email': 'testabc25@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc26', 'fullName': 'Test ABC', 'email': 'testabc26@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc27', 'fullName': 'Test ABC', 'email': 'testabc27@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc28', 'fullName': 'Test ABC', 'email': 'testabc28@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc29', 'fullName': 'Test ABC', 'email': 'testabc29@gmail.com', 'role': 'FS-IT Admin', 'branch': 'HCM DSA'},
    {'userName': 'testabc30', 'fullName': 'Test ABC', 'email': 'testabc30@gmail.com', 'role': 'FS-Sales Supervisor', 'branch': 'HCM DSA'},
    {'userName': 'testabc31', 'fullName': 'Test ABC', 'email': 'testabc31@gmail.com', 'role': 'FS-Sales Admin', 'branch': 'HCM DSA'},
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
