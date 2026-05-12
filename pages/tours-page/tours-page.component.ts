import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from '../../components/tours/tours.component';

@Component({
  selector: 'app-tours-page',
  standalone: true,
  imports: [CommonModule, ToursComponent],
  templateUrl: './tours-page.component.html',
})
export class ToursPageComponent {}
