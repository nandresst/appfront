import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LalumnosComponent } from './lalumnos.component';

describe('LalumnosComponent', () => {
  let component: LalumnosComponent;
  let fixture: ComponentFixture<LalumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LalumnosComponent]
    });
    fixture = TestBed.createComponent(LalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
