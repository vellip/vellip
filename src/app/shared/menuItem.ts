export class MenuItem {
  label: string;
  href: string;
  target?: string;

  toString() {
    return this.label;
  }
}
