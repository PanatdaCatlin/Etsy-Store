import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndernavComponent } from './undernav.component';

describe('UndernavComponent', () => {
  let component: UndernavComponent;
  let fixture: ComponentFixture<UndernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
