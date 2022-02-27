import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubletsiteComponent } from './subletsite.component';

describe('SubletsiteComponent', () => {
  let component: SubletsiteComponent;
  let fixture: ComponentFixture<SubletsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubletsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubletsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
