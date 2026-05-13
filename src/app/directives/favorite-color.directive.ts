import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFavoriteColor]',
  standalone: true
})
export class FavoriteColorDirective implements OnInit {

  @Input() appFavoriteColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {

    if (this.appFavoriteColor === 'available') {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    }
    else if (this.appFavoriteColor === 'limited') {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
    }
    else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}