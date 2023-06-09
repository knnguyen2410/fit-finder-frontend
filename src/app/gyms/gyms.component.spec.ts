import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GymsComponent } from './gyms.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GymsComponent', () => {
  let component: GymsComponent;
  let fixture: ComponentFixture<GymsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(GymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
