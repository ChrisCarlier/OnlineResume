import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionformationComponent } from './sectionformation.component';

describe('SectionformationComponent', () => {
  let component: SectionformationComponent;
  let fixture: ComponentFixture<SectionformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
