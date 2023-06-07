import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerGymsComponent } from './owner-gyms.component';

describe('OwnerGymsComponent', () => {
  let component: OwnerGymsComponent;
  let fixture: ComponentFixture<OwnerGymsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerGymsComponent]
    });
    fixture = TestBed.createComponent(OwnerGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
