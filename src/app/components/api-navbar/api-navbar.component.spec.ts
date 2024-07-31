import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNavbarComponent } from './api-navbar.component';

describe('ApiNavbarComponent', () => {
  let component: ApiNavbarComponent;
  let fixture: ComponentFixture<ApiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
