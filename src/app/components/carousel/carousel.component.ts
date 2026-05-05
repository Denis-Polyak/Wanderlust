import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  slides = [
    {
      title: 'Відкрийте магію Азії',
      subtitle: 'Неймовірні пейзажі, давня культура та незабутні враження чекають на вас.',
      badge: '🔥 Хіт сезону',
      emoji: '🏯',
      bg: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)'
    },
    {
      title: 'Середземноморська мрія',
      subtitle: 'Лазурове море, ароматний базилік та вино під зоряним небом Греції.',
      badge: '⭐ Преміум тур',
      emoji: '🏛️',
      bg: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
    },
    {
      title: 'Сафарі в серці Африки',
      subtitle: 'Живоживі леви, слони та захід сонця над безмежною савано Кенії.',
      badge: '🌿 Еко-тур',
      emoji: '🦁',
      bg: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)'
    }
  ];
}
