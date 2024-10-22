import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftimagecardComponent } from './leftimagecard.component';

describe('LeftimagecardComponent', () => {
  let component: LeftimagecardComponent;
  let fixture: ComponentFixture<LeftimagecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftimagecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftimagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
