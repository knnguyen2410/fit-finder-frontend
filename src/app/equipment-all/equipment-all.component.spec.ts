import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAllComponent } from './equipment-all.component';

describe('EquipmentAllComponent', () => {
  let component: EquipmentAllComponent;
  let fixture: ComponentFixture<EquipmentAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentAllComponent]
    });
    fixture = TestBed.createComponent(EquipmentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
