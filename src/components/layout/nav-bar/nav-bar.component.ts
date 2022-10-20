import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event: any): void {
    let navigation = document.querySelector('.side-bar')
    let main = document.querySelector('.main')

    navigation?.classList.toggle('active')
    main?.classList.toggle('active')
  }

}
