import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackoutputComponent } from './trackoutput.component';

describe('TrackoutputComponent', () => {
  let component: TrackoutputComponent;
  let fixture: ComponentFixture<TrackoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackoutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
