import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GymsComponent } from './gyms.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarComponent } from '../home-page/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

describe('GymsComponent', () => {
  let component: GymsComponent;
  let fixture: ComponentFixture<GymsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymsComponent, SearchBarComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(GymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
