import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  @Input() show: boolean = false
  @Output() close: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.show = false
    this.close.emit(this.show)
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
