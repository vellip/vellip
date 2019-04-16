import {Injectable, NgZone} from '@angular/core';
import {WindowRefService} from './window-ref.service';

export interface ParallaxOption {
  [property: string]: {value: string, speed: number, start: number, end?: number, delay?: number, notNegative?: boolean}[];
}

@Injectable({
  providedIn: 'root'
})
class Parallax {
  private state: number;

  constructor(private node: HTMLElement, private options: ParallaxOption) { }


  public scrollAction = (scrollTop: number): any  => {
    if (this.state === scrollTop) {
      return false;
    }

    let cssText = '';

    for (const key in this.options) {
      if (this.options.hasOwnProperty(key)) {
        cssText += `${key}: `;
        this.options[key].forEach(el => {

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
          cssText += el.value.replace(/%d/g, String(style));
        });
      }
    }
    this.state = scrollTop;
    this.node.style.cssText = cssText;
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
    ) {}

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
      requestAnimationFrame(this.update.bind(this));
    }
    this.updating = true;
  }

  scrollHandler() {
    this.scrollTop = this.windowRef.nativeWindow.pageYOffset;
    this.requestUpdate();
  }

  initParallax(node: HTMLElement, options: ParallaxOption) {
    if (!this.scrollHandlers.length) {
      this.init();
    }

    const newParallax = new Parallax(node, options);
    this.scrollHandlers.push(newParallax.scrollAction);
  }
}
