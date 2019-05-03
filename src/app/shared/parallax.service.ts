import {Injectable, NgZone} from '@angular/core';
import {WindowRefService} from './window-ref.service';

export interface TransformKey {
  property?: string;
  value: string;
  speed: number;
  start: number;
  end?: number;
  delay?: number;
  replaceIndex: number;
}

@Injectable({
  providedIn: 'root'
})
class Parallax {
  private state: number;

  private static calculateStyle(el, scrollTop: number) {
    const start = el.start || 0;
    const delay = el.delay || 0;
    let style: number = (scrollTop - delay) / 10 * el.speed + start;
    if (delay > scrollTop) {
      style = start;
    }
    if (style > el.end) {
      style = el.end;
    }
    if (delay) {
      style = Math.max(0, style);
    }
    return el.value.slice(0, el.replaceIndex) + String(style) + el.value.slice(el.replaceIndex);
  }

  constructor(private node: HTMLElement, private transforms: TransformKey[]) {
    this.transforms.forEach(item => {
      item.replaceIndex = item.value.indexOf('%d');
      item.value = item.value.replace('%d', '');
    });
  }

  public scrollAction = (scrollTop: number): any => {
    if (this.state === scrollTop) {
      return false;
    }

    let cssText = '';

    this.transforms.forEach(el => {
      cssText += Parallax.calculateStyle(el, scrollTop);
      if (el.property) {
        this.node.style[el.property] = cssText;
      }
    });

    this.node.style.transform = cssText;
    this.state = scrollTop;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ParallaxService {
  private scrollHandlers: Array<Function> = [];
  private scrollTop: number;
  private updating = false;

  constructor(
    private windowRef: WindowRefService,
    private ngZone: NgZone
  ) {
  }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.windowRef.nativeWindow.addEventListener('scroll', this.scrollHandler.bind(this), false);
      this.requestUpdate();
    });
  }

  update() {
    this.updating = false;
    this.scrollHandlers.forEach((fn) => fn(this.scrollTop));
  }

  requestUpdate() {
    if (!this.updating) {
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(this.update.bind(this));
      });
    }
    this.updating = true;
  }

  scrollHandler() {
    this.scrollTop = this.windowRef.nativeWindow.pageYOffset;
    this.requestUpdate();
  }

  initParallax(node: HTMLElement, transforms: TransformKey[]) {
    if (!this.scrollHandlers.length) {
      this.init();
    }

    const newParallax = new Parallax(node, transforms);
    this.scrollHandlers.push(newParallax.scrollAction);
  }
}
