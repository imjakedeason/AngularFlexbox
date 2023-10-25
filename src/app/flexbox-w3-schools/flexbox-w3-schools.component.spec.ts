import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxW3SchoolsComponent } from './flexbox-w3-schools.component';

describe('FlexboxW3SchoolsComponent', () => {
  let component: FlexboxW3SchoolsComponent;
  let fixture: ComponentFixture<FlexboxW3SchoolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexboxW3SchoolsComponent]
    });
    fixture = TestBed.createComponent(FlexboxW3SchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
