import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ShapesService} from '../shapes.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ParallaxService} from '../parallax.service';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {
  @ViewChild('shapeNode', {read: ElementRef}) shapeNode: ElementRef;
  @Input() shape: string;
  @Input() speed: number;
  @Input() parallaxKey: string;
  shapeSvg: SafeHtml;
  constructor(
    private shapes: ShapesService,
    private sanitizer: DomSanitizer,
    private parallax: ParallaxService,
  ) { }

  ngOnInit() {
    this.shapes.getShape(this.shape)
      .subscribe((data) => {
        this.shapeSvg = this.sanitizer.bypassSecurityTrustHtml(data);
        if (this.parallaxKey) {
          this.parallax.initParallax(this.shapeNode);
        }
      });
  }
}
