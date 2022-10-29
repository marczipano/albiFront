import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubletDeleteComponent } from './sublet-delete.component';

describe('SubletDeleteComponent', () => {
  let component: SubletDeleteComponent;
  let fixture: ComponentFixture<SubletDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubletDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubletDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
