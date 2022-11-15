import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public searchInput: Array<any> = []
  public isSearch: boolean = false
  public listShow: Array<any> = []
  public listSearch: Array<any> = []
  public totalPages: number = 1
  public currentPage: number = 1
  public paginationSize: number = 7
  @Input() headers: Array<any> = []
  @Input() listData: Array<any> = []
  @Input() search: boolean = false
  @Input() sort: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.onSearchInit()
    this.onPagination(1, this.listData)
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
      this.isSearch = true
      let valueSearchnonVN = this.nonAccentVietnamese(valueSearch)
      let arr = valueSearchnonVN.split(';')
      let result: boolean = false
      this.listSearch = []
      if (this.listData.length > 0) {
        this.listData.forEach(row => {
          let value = row[key].toString().toLowerCase()
          let valuenonVN = this.nonAccentVietnamese(value)
          arr.forEach((item: any) => {
            if (item !== '') {
              result = valuenonVN.includes(item.toLowerCase())
              if (result === true) this.listSearch.push(row)
            }
          })
        })
        this.listShow = this.listSearch
        this.onPagination(1, this.listShow)
      }
    } else {
      this.isSearch = false
      this.listShow = this.listData
      this.onPagination(1, this.listShow)
    }
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

  range(start: number, end: number) {
    return Array.from(Array(end - start + 1), (_, i) => i + start)
  }

  replaceZeroWithDots(arr: any) {
    arr.forEach(() => {
      let index = arr.indexOf(0);

      if (index !== -1) {
        arr[index] = '...';
      }
    })

    return arr
  }

  onGetPageList(totalPages: number, page: number, maxLength: number) {
    let sideWidth = maxLength < 9 ? 1 : 2
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1

    if (totalPages <= maxLength) {
      return this.range(1, totalPages)
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      let arr = this.range(1, maxLength - sideWidth - 1).concat(0, this.range(totalPages - sideWidth + 1, totalPages))
      this.replaceZeroWithDots(arr)
      return arr
    }

    if (page >= totalPages - sideWidth - rightWidth) {
      let arr = this.range(1, sideWidth).concat(0, this.range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages))
      this.replaceZeroWithDots(arr)
      return arr
    }

    let arr = this.range(1, sideWidth).concat(0, this.range(page - leftWidth, page + rightWidth), 0, this.range(totalPages - sideWidth + 1, totalPages))
    this.replaceZeroWithDots(arr)
    return arr
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

  onPagination(page: number, querySet: any) {
    if (typeof page === 'number') {
      let state = {
        'querySet': querySet,
        'page': page,
        'rows': 10 /* limitRows per page */
      }
      this.currentPage = state.page
      let data = this.onTrimPagination(state.querySet, state.page, state.rows)
  
      this.totalPages = data.pages
      this.listShow = data.querySet
    }
  }

  generateRandomColor() {
    const arrColor = ['#ffc296', '#bbe888', '#f493b8', '#9e9bea']
    return arrColor[Math.floor(Math.random() * arrColor.length)];
  }

}
