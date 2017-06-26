import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTasksComponent } from './family-tasks.component';

describe('FamilyTasksComponent', () => {
  let component: FamilyTasksComponent;
  let fixture: ComponentFixture<FamilyTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
