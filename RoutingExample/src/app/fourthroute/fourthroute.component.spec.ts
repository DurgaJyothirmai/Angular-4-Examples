import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthrouteComponent } from './fourthroute.component';

describe('FourthrouteComponent', () => {
  let component: FourthrouteComponent;
  let fixture: ComponentFixture<FourthrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
