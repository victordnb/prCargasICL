import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaNameAndTypeComponent } from './villa-name-and-type.component';

describe('VillaNameAndTypeComponent', () => {
  let component: VillaNameAndTypeComponent;
  let fixture: ComponentFixture<VillaNameAndTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaNameAndTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillaNameAndTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
