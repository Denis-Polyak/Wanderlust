import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    {
      icon: '✈️',
      title: 'Авіаквитки',
      description: 'Підбір найвигідніших квитків з будь-якого аеропорту України. Прямі рейси та стикувальні маршрути.',
      features: ['Понад 500 авіакомпаній', 'Ціни без прихованих зборів', 'Зручне порівняння тарифів'],
      color: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
      icon: '🏨',
      title: 'Готелі',
      description: 'Широкий вибір готелів від економ до люкс класу. Ексклюзивні пропозиції для клієнтів Wanderlust.',
      features: ['Від 2* до 5* готелів', 'Безкоштовне скасування', 'Миттєве підтвердження'],
      color: 'linear-gradient(135deg, #f093fb, #f5576c)'
    },
    {
      icon: '🛡️',
      title: 'Страхування',
      description: 'Комплексне туристичне страхування для спокійної подорожі. Медична допомога 24/7.',
      features: ['Медичне страхування', 'Страхування багажу', 'Скасування поїздки'],
      color: 'linear-gradient(135deg, #4facfe, #00f2fe)'
    },
    {
      icon: '🚌',
      title: 'Трансфери',
      description: 'Комфортні трансфери з/до аеропорту та між містами. Досвідчені водії та сучасні автомобілі.',
      features: ['Аеропорт-готель', 'Міжміські маршрути', 'Індивідуальні тури'],
      color: 'linear-gradient(135deg, #43e97b, #38f9d7)'
    },
  ];
}
