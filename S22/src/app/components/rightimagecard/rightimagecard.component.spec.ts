import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightimagecardComponent } from './rightimagecard.component';

describe('RightimagecardComponent', () => {
  let component: RightimagecardComponent;
  let fixture: ComponentFixture<RightimagecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightimagecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightimagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
