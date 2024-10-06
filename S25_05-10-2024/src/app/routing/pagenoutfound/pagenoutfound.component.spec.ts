import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenoutfoundComponent } from './pagenoutfound.component';

describe('PagenoutfoundComponent', () => {
  let component: PagenoutfoundComponent;
  let fixture: ComponentFixture<PagenoutfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenoutfoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenoutfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
