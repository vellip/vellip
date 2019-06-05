import {Deserializable} from './deserializable';
import {Image} from './image';
import {Fact} from './facts';
import {Component} from './component';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Injectable, OnInit} from '@angular/core';

export class Post implements Deserializable {
  public id: string;
  public uuid: string;
  public title: string;
  public title_slug: string;
  public body: Component[];
  public facts: Fact[];
  public image: Image;
  public gallery: Image[];
  public intro: string;
  public excerpt: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.image = new Image().deserialize(input.image);
    this.gallery = input.gallery.map(el => new Image().deserialize(el));
    this.facts = input.facts.map(el => new Fact().deserialize(el));
    this.body = input.body.map(el => new Component().deserialize(el));
    return this;
  }
}

export class TextPage implements Deserializable {
  public title: string;
  public body: Component[];

  deserialize(input: any): this {
    Object.assign(this, input);
    this.body = input.body.map(el => new Component().deserialize(el));
    return this;
  }
}

