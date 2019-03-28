import {ElementRef, Injectable} from '@angular/core';
import linear from 'eases/linear';
import {WindowRefService} from './window-ref.service';

@Injectable({
  providedIn: 'root'
})

class Parallax {
  private state: number;
  private speed: number;
  private key: string;

  constructor(private node: HTMLElement) {
    this.key = node.dataset.key;
    this.speed = parseInt(node.dataset.speed, 10) || 4;
  }

  public scrollAction = (scrollTop: number): any => {
    if (this.state === scrollTop) {
      return false;
    }

    this.state = scrollTop;
    const style: number = linear(scrollTop / 10 * this.speed);
    this.node.style.cssText = this.key.replace('%d', String(style));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ParallaxService {
  private scrollHandlers: Array<Function> = [];
  private scrollTop: number;
  private updating = false;

  constructor(private windowRef: WindowRefService) {}

  init() {
    this.windowRef.nativeWindow.addEventListener('scroll', this.scrollHandler.bind(this), false);
    this.requestUpdate();
  }

  update() {
    this.updating = false;
    this.scrollHandlers.forEach((fn) => fn(this.scrollTop));
  }

  requestUpdate() {
    if (!this.updating) {
      requestAnimationFrame(this.update.bind(this));
    }
    this.updating = true;
  }

  scrollHandler() {
    this.scrollTop = this.windowRef.nativeWindow.pageYOffset;
    this.requestUpdate();
  }

  initParallax(node: ElementRef) {
    if (!this.scrollHandlers.length) {
      this.init();
    }

    const newParallax = new Parallax(node.nativeElement);
    this.scrollHandlers.push(newParallax.scrollAction);
  }
}
