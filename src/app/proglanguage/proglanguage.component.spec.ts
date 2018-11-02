import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProglanguageComponent } from './proglanguage.component';

describe('ProglanguageComponent', () => {
  let component: ProglanguageComponent;
  let fixture: ComponentFixture<ProglanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProglanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProglanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
