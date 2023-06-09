import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EquipmentAllComponent } from './equipment-all.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EquipmentAllComponent', () => {
  let component: EquipmentAllComponent;
  let fixture: ComponentFixture<EquipmentAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentAllComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(EquipmentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
