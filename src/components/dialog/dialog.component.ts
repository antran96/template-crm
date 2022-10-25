import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public formData = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    identify: ['', Validators.required],
    phone: ['', Validators.required],
    role: ['', Validators.required],
    branch: ['', Validators.required]
  })

  @Input() show: boolean = false
  @Output() close: EventEmitter<any> = new EventEmitter()
  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.show = false
    this.close.emit(this.show)
  }

  public onSubmit(): void {
    console.log('submit form:', this.formData.value)
  }
  
  onFocus(event: any): void {
    event.focus()
  }
}
