import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ParallaxOption, ParallaxService} from './parallax.service';

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
      const options = this.buildOptions();
      this.parallax.initParallax(this.el.nativeElement.querySelector('svg') || this.el.nativeElement, options);
    }
  }

  buildOptions(): ParallaxOption {
    const options: ParallaxOption = {};

    this.parallaxKeys.forEach(item => {
      if (!options[item.property]) {
        options[item.property] = [];
      }
      options[item.property].push(item);
    });
    return options;
  }
}
