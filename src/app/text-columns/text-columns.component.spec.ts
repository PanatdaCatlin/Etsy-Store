import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextColumnsComponent } from './text-columns.component';

describe('TextColumnsComponent', () => {
  let component: TextColumnsComponent;
  let fixture: ComponentFixture<TextColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
