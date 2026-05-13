import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteColorDirective } from '../../directives/favorite-color.directive';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { UnlessMobileDirective } from '../../directives/unless-mobile.directive';

// Інтерфейс для опису туру
interface Tour {
  id: number;
  name: string;
  destination: string;
  continent: string;
  price: number;
  days: number;
  status: 'available' | 'limited' | 'sold_out';
  isHead: boolean; // чи є туром-хітом (аналог завідувача)
}

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [
  CommonModule,
  RouterModule,
  FavoriteColorDirective,
  HighlightCardDirective,
  UnlessMobileDirective
],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {

  // Інтерполяція – заголовок компонента
  title = 'Каталог турів Wanderlust';

  // Змінна для ngIf – показ/приховування фільтр-панелі
  isFilterVisible = false;

  // Поточна дата для пайпів
  getDate(): Date {
    return new Date();
  }

  // Масив дисциплін (напрямків) для ngFor
  destinations = [
    'Європа', 'Азія', 'Африка', 'Америка', 'Океанія'
  ];

  // Масив турів типу Tour для ngSwitch / ngStyle / ngClass
  tours: Tour[] = [
    { id: 1, name: 'Магія Японії',       destination: 'Токіо',      continent: 'Азія',    price: 1200, days: 10, status: 'available', isHead: true  },
    { id: 2, name: 'Грецькі острови',    destination: 'Санторіні',  continent: 'Європа',  price: 890,  days: 7,  status: 'limited',   isHead: false },
    { id: 3, name: 'Сафарі Кенія',       destination: 'Найробі',    continent: 'Африка',  price: 1550, days: 12, status: 'available', isHead: false },
    { id: 4, name: 'Нью-Йорк Експрес',   destination: 'Нью-Йорк',   continent: 'Америка', price: 980,  days: 6,  status: 'sold_out',  isHead: false },
    { id: 5, name: 'Балійський рай',     destination: 'Балі',       continent: 'Азія',    price: 750,  days: 9,  status: 'available', isHead: false },
    { id: 6, name: 'Сідней і рифи',      destination: 'Сідней',     continent: 'Океанія', price: 1800, days: 14, status: 'limited',   isHead: true  },
    { id: 7, name: 'Романтика Парижа',   destination: 'Париж',      continent: 'Європа',  price: 670,  days: 5,  status: 'available', isHead: false },
    { id: 8, name: 'Марокканська казка', destination: 'Марракеш',   continent: 'Африка',  price: 540,  days: 8,  status: 'available', isHead: false },
  ];

  // Функція для ngStyle – колір рядка залежно від статусу туру
  getStatusColor(status: string): string {
    switch (status) {
      case 'available': return '#d4edda'; // зелений
      case 'limited':   return '#fff3cd'; // жовтий
      case 'sold_out':  return '#f8d7da'; // червоний
      default:          return '#ffffff';
    }
  }

  // Функція для ngStyle – колір тексту статусу
  getStatusTextColor(status: string): string {
    switch (status) {
      case 'available': return '#155724';
      case 'limited':   return '#856404';
      case 'sold_out':  return '#721c24';
      default:          return '#000';
    }
  }
}
