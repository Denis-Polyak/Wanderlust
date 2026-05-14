import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    peopleCount: new FormControl(1, [Validators.required, Validators.min(1)]),
    travelDate: new FormControl('', Validators.required),
    comment: new FormControl('')
  });

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('BOOKING FORM DATA:', this.bookingForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}