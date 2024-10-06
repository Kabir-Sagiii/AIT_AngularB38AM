import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubHomeComponent } from './github-home.component';

describe('GithubHomeComponent', () => {
  let component: GithubHomeComponent;
  let fixture: ComponentFixture<GithubHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
