import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymaterialComponent } from './mymaterial.component';

describe('MymaterialComponent', () => {
  let component: MymaterialComponent;
  let fixture: ComponentFixture<MymaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MymaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
