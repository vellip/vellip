import {Component, Input, OnInit} from '@angular/core';
import {ShapesService} from '../shapes.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {
  @Input() shape: String;
  shapeSvg: SafeHtml;
  constructor(
    private shapes: ShapesService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.shapes.getShape(this.shape)
      .subscribe((data) => {
        this.shapeSvg = this.sanitizer.bypassSecurityTrustHtml(data);
      });
  }

}
