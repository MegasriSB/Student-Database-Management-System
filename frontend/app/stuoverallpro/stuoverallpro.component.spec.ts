import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuoverallproComponent } from './stuoverallpro.component';

describe('StuoverallproComponent', () => {
  let component: StuoverallproComponent;
  let fixture: ComponentFixture<StuoverallproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuoverallproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuoverallproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
