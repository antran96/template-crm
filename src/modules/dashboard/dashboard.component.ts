import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headers: Array<any> = [
    { key: 'userName', title: 'User Name', show: true },
    { key: 'status', title: 'Status', show: true, type: 'status' },
    { key: 'f1Status', title: 'F1 Status', show: true },
    { key: 'f1Stage', title: 'F1 Stage', show: true },
    { key: 'codeTypeRegion', title: 'Branch', show: true },
    { key: 'appCount', title: 'App Count', show: true }
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
  dataChart: Array<any> = [
    { status: 'New', count: '10' },
    { status: 'Processing', count: '20' },
    { status: 'Reversing', count: '15' },
    { status: 'Cancel', count: '5' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
