import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionexperienceComponent } from './sectionexperience.component';

describe('SectionexperienceComponent', () => {
  let component: SectionexperienceComponent;
  let fixture: ComponentFixture<SectionexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
