import {Deserializable} from './deserializable';

export class Fact implements Deserializable {
  public label: string;
  public value: string;
  public link?: string;

  deserialize(input: any): this {
    Object.assign(this, input.value);
    return this;
  }
}
