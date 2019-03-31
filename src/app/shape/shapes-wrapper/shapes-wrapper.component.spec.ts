import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesWrapperComponent } from './shapes-wrapper.component';

describe('ShapesWrapperComponent', () => {
  let component: ShapesWrapperComponent;
  let fixture: ComponentFixture<ShapesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
