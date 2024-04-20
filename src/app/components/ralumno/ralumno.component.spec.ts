import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RalumnoComponent } from './ralumno.component';

describe('RalumnoComponent', () => {
  let component: RalumnoComponent;
  let fixture: ComponentFixture<RalumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RalumnoComponent]
    });
    fixture = TestBed.createComponent(RalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
