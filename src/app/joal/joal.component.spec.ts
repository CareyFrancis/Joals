import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoalComponent } from './joal.component';

describe('JoalComponent', () => {
  let component: JoalComponent;
  let fixture: ComponentFixture<JoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
