import {Deserializable} from './deserializable';
import {Image} from './image';

export class About implements Deserializable {
  public title: string;
  public picture: Image;
  public intro: string;
  public experience: string;
  public subtitle: string;
  public skills: { value: { title: string, text: string } }[];

  deserialize(input: any): this {
    console.log(input);
    Object.assign(this, input);
    this.picture = new Image().deserialize(input.picture);
    return this;
  }
}
