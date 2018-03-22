import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondrouteComponent } from './secondroute.component';

describe('SecondrouteComponent', () => {
  let component: SecondrouteComponent;
  let fixture: ComponentFixture<SecondrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
