import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubletsComponent } from './sublets.component';

describe('SubletsComponent', () => {
  let component: SubletsComponent;
  let fixture: ComponentFixture<SubletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
