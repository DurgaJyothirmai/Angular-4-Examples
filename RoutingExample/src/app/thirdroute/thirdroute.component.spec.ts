import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdrouteComponent } from './thirdroute.component';

describe('ThirdrouteComponent', () => {
  let component: ThirdrouteComponent;
  let fixture: ComponentFixture<ThirdrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
