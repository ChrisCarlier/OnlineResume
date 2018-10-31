import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionaboutmeComponent } from './sectionaboutme.component';

describe('SectionaboutmeComponent', () => {
  let component: SectionaboutmeComponent;
  let fixture: ComponentFixture<SectionaboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionaboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionaboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
