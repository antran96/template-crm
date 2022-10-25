import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {
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
}
