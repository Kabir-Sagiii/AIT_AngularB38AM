import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFComponent } from './tdf.component';

describe('TDFComponent', () => {
  let component: TDFComponent;
  let fixture: ComponentFixture<TDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
