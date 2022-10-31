import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headers: Array<any> = [
    { key: 'userName', title: 'User Name', show: true, type: 'text' },
    { key: 'status', title: 'Status', show: true, type: 'status' },
    { key: 'f1Status', title: 'F1 Status', show: true, type: 'text' },
    { key: 'f1Stage', title: 'F1 Stage', show: true, type: 'text' },
    { key: 'codeTypeRegion', title: 'Branch', show: true, type: 'text' },
    { key: 'appCount', title: 'App Count', show: true, type: 'text' }
  ]
  listData: Array<any> = [
    { userName: 'Test ABC', status: 'Processing', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'New', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'Processing', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'Processing', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'Reversing', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'Cancel', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'New', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'Processing', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'Cancel', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
    { userName: 'Test ABC', status: 'Reversing', f1Status: 'PRE_APPROVAL', f1Stage: 'LOGIN_ACCEPTANT', codeTypeRegion: 'HCM_DSA', appCount: 9 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
