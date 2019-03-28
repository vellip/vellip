import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ShapesService} from '../shared/shapes.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ParallaxService} from '../shared/parallax.service';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements AfterViewInit {
  @ViewChild('shapeNode', {read: ElementRef}) shapeNode: ElementRef;
  @Input() shape: string;
  @Input() speed: number;
  @Input() parallaxKey: string;

  constructor(
    private shapes: ShapesService,
    private sanitizer: DomSanitizer,
    private parallax: ParallaxService,
  ) { }

  ngAfterViewInit() {
    if (this.parallaxKey) {
      this.parallax.initParallax(this.shapeNode);
    }
  }
}
