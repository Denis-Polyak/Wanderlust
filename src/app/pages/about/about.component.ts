import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  team = [
    { name: 'Олена Коваль', role: 'Засновниця & CEO', emoji: '👩‍💼', bio: 'Понад 15 років у туристичній галузі. Особисто відвідала 60+ країн.' },
    { name: 'Максим Бойко', role: 'Директор з туризму', emoji: '🧭', bio: 'Спеціаліст з екзотичних напрямків. Організував понад 500 турів.' },
    { name: 'Ірина Мельник', role: 'Менеджер з клієнтів', emoji: '🤝', bio: 'Завжди знайде найкраще рішення для кожного мандрівника.' },
  ];

  stats = [
    { value: '10 000+', label: 'Задоволених клієнтів' },
    { value: '80+', label: 'Країн маршрутів' },
    { value: '15', label: 'Років досвіду' },
    { value: '24/7', label: 'Підтримка' },
  ];
}
