import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OwnerGymsComponent } from './owner-gyms.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OwnerGymsComponent', () => {
  let component: OwnerGymsComponent;
  let fixture: ComponentFixture<OwnerGymsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerGymsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(OwnerGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
