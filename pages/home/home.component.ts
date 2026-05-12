import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ToursComponent } from '../../components/tours/tours.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselComponent, ToursComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  destinations = [
    {
      name: 'Санторіні',
      country: '🇬🇷 Греція',
      description: 'Білосніжні будинки, блакитні куполи та захід сонця, що запам\'ятається назавжди.',
      price: '€890',
      emoji: '🏛️',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Кіото',
      country: '🇯🇵 Японія',
      description: 'Давні храми, сади каменів та аромат сакури навесні.',
      price: '€1 200',
      emoji: '⛩️',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Марракеш',
      country: '🇲🇦 Марокко',
      description: 'Живописні медини, яскраві базари та автентична кухня Магрибу.',
      price: '€540',
      emoji: '🕌',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  features = [
    { icon: '✈️', title: 'Гнучкі маршрути', text: 'Індивідуальний підбір турів під ваші побажання' },
    { icon: '🛡️', title: 'Гарантія безпеки', text: 'Страхування та підтримка 24/7 у будь-якій точці світу' },
    { icon: '💳', title: 'Вигідні ціни', text: 'Найкращі пропозиції без прихованих комісій' },
    { icon: '🌟', title: 'Преміум сервіс', text: 'Понад 10 000 задоволених клієнтів щороку' }
  ];
}
