import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GymComponent } from './gym.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GymComponent', () => {
  let component: GymComponent;
  let fixture: ComponentFixture<GymComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(GymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
