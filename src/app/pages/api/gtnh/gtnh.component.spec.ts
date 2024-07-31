import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtnhComponent } from './gtnh.component';

describe('GtnhComponent', () => {
  let component: GtnhComponent;
  let fixture: ComponentFixture<GtnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtnhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
