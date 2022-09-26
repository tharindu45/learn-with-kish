import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaydispatchComponent } from './todaydispatch.component';

describe('TodaydispatchComponent', () => {
  let component: TodaydispatchComponent;
  let fixture: ComponentFixture<TodaydispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaydispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaydispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
