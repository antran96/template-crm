import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public searchInput: Array<any> = []
  public listShow: Array<any> = []
  public pagesNumber: number = 1
  public currentPage: number = 1
  @Input() headers: Array<any> = []
  @Input() listData: Array<any> = []
  @Input() search: boolean = false
  @Input() filterSearch: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.onSearchInit()
    this.onPagination(1)
  }

  onSearchInit(): void {
    if (this.headers) {
      this.headers.forEach(item => {
        this.searchInput.push({
          col: item.key,
          value: ''
        })
      })
    }
  }

  onSearch(valueSearch: any, key: string): void {
    if (valueSearch !== '') {
      let valueSearchnonVN = this.nonAccentVietnamese(valueSearch)
      let arr = valueSearchnonVN.split(';')
      let result: boolean = false
      let newList: Array<any> = []
      if (this.listData.length > 0) {
        this.listData.forEach(row => {
          let value = row[key].toString().toLowerCase()
          let valuenonVN = this.nonAccentVietnamese(value)
          arr.forEach((item: any) => {
            if (item !== '') {
              result = valuenonVN.includes(item.toLowerCase())
              if (result === true) newList.push(row)
            }
          })
        })
        this.listShow = newList
      }
    } else this.listShow = this.listData
  }

  nonAccentVietnamese(value: string) {
    value = value.toString();
    value = value.toLowerCase();
    value = value.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    value = value.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    value = value.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    value = value.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    value = value.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    value = value.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    value = value.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    value = value.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    value = value.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return value;
}

  counter(i: number) {
    return new Array(i);
  }

  onTrimPagination(querySet: any, page: number, rows: number) {
    let start = (page - 1) * rows
    let end = start + rows
    let trimedData = querySet.slice(start, end)
    let pages = Math.ceil(querySet.length / rows)
    return {
      'querySet': trimedData,
      'pages': pages
    }
  }

  onPagination(page: number) {
      let state = {
        'querySet': this.listData,
        'page': page,
        'rows': 5
      }
      this.currentPage = state.page
      let data = this.onTrimPagination(state.querySet, state.page, state.rows)
      
      this.pagesNumber = data.pages
      this.listShow = data.querySet
  }

  generateRandomColor() {
    const arrColor = ['#ffc296', '#bbe888', '#f493b8', '#9e9bea']
    return arrColor[Math.floor(Math.random() * arrColor.length)];
  }

}
