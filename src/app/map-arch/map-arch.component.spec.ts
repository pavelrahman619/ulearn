/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapArchComponent } from './map-arch.component';

describe('MapArchComponent', () => {
  let component: MapArchComponent;
  let fixture: ComponentFixture<MapArchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapArchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapArchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
