import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnlessMobile]',
  standalone: true
})
export class UnlessMobileDirective implements OnInit {

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit() {

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      this.vcr.createEmbeddedView(this.tpl);
    } else {
      this.vcr.clear();
    }
  }
}