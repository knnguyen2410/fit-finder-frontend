import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedGymsComponent } from './featured-gyms.component';

describe('FeaturedGymsComponent', () => {
  let component: FeaturedGymsComponent;
  let fixture: ComponentFixture<FeaturedGymsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedGymsComponent]
    });
    fixture = TestBed.createComponent(FeaturedGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
