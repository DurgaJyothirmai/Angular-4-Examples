import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstrouteComponent } from './firstroute.component';

describe('FirstrouteComponent', () => {
  let component: FirstrouteComponent;
  let fixture: ComponentFixture<FirstrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
