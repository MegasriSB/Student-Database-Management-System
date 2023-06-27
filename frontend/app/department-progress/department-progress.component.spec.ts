import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentProgressComponent } from './department-progress.component';

describe('DepartmentProgressComponent', () => {
  let component: DepartmentProgressComponent;
  let fixture: ComponentFixture<DepartmentProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
