import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndidepproComponent } from './indideppro.component';

describe('IndidepproComponent', () => {
  let component: IndidepproComponent;
  let fixture: ComponentFixture<IndidepproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndidepproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndidepproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
