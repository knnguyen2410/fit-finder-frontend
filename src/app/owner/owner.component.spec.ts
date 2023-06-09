import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OwnerComponent } from './owner.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OwnerComponent', () => {
  let component: OwnerComponent;
  let fixture: ComponentFixture<OwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(OwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
