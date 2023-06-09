import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeaturedGymsComponent } from './featured-gyms.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeaturedGymsComponent', () => {
  let component: FeaturedGymsComponent;
  let fixture: ComponentFixture<FeaturedGymsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedGymsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(FeaturedGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
