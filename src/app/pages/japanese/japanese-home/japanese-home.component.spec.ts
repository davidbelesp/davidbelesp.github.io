import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseHomeComponent } from './japanese-home.component';

describe('JapaneseHomeComponent', () => {
  let component: JapaneseHomeComponent;
  let fixture: ComponentFixture<JapaneseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaneseHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaneseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
