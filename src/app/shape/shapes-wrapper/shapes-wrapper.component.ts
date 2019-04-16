import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shapes-wrapper',
  templateUrl: './shapes-wrapper.component.html',
  styleUrls: ['./shapes-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapesWrapperComponent implements AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() referenceNode: Element;
  @Input() container = false;
  private nodeClone: HTMLElement;


  constructor(
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    if (!this.referenceNode) {
      console.error('shapes-wrapper needs a reference node');
    }
    this.nodeClone = this.referenceNode.cloneNode(true) as HTMLElement;
    this.nodeClone.id = '';
    this.renderer.addClass(this.nodeClone, 'shapesWrapper__clone');
    this.renderer.appendChild(this.wrapper.nativeElement, this.nodeClone);
  }

}
