import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoshaniComponent } from './roshani.component';

describe('RoshaniComponent', () => {
  let component: RoshaniComponent;
  let fixture: ComponentFixture<RoshaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoshaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoshaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
