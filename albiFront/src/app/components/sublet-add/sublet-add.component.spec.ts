import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubletAddComponent } from './sublet-add.component';

describe('SubletAddComponent', () => {
  let component: SubletAddComponent;
  let fixture: ComponentFixture<SubletAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubletAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubletAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
