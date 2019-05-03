import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {TransformKey, ParallaxService} from './parallax.service';

@Directive({
  selector: '[appParallax]',
  providers: [ParallaxService]
})
export class ParallaxDirective implements OnInit {
  @Input('appParallax') parallaxKeys: any;

  constructor(
    private parallax: ParallaxService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    if (this.parallaxKeys) {
      this.parallax.initParallax(this.el.nativeElement.querySelector('svg') || this.el.nativeElement,
        this.parallaxKeys);
    }
  }
}
