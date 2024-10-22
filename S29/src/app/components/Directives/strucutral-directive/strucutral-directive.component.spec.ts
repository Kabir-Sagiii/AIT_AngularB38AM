import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucutralDirectiveComponent } from './strucutral-directive.component';

describe('StrucutralDirectiveComponent', () => {
  let component: StrucutralDirectiveComponent;
  let fixture: ComponentFixture<StrucutralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrucutralDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrucutralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
