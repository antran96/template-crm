import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() headers: Array<any> = []
  @Input() listData: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.generateRandomColor()
    }, 0)
  }

  generateRandomColor() {
    const arrColor = ['#ffc296', '#bbe888', '#f493b8', '#9e9bea']
    return arrColor[Math.floor(Math.random() * arrColor.length)];
  }

}
