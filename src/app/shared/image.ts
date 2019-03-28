import {Deserializable} from './deserializable';
import {environment} from '../../environments/environment';

export class Image implements Deserializable {
  private _path: string;
  public title?: string;

  deserialize(input: any): this {
    this._path = input.path;

    if (input.meta && input.meta.title) {
      this.title = input.meta.title;
    }

    return this;
  }

  get path(): string {
    return `${environment.baseUrl}/${this._path}`;
  }

  set path(newPath: string) {
    this._path = newPath;
  }
}
