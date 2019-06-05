import {Deserializable} from './deserializable';

export class Component implements Deserializable {
  public type: string;
  public text: string;
  public tag?: string;
  public html?: string;

  public toHtml(): string {
    if (this.tag) {
      return `<${this.tag}>${this.text}</${this.tag}>`;
    } else {
      return this.text || this.html;
    }
  }

  deserialize(input: any): this {
    this.type = input.component;
    this.text = input.settings.text;
    this.tag = input.settings.tag;
    this.html = input.settings.html;
    return this;
  }
}
