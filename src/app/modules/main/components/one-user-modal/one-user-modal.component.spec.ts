import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneUserModalComponent } from './one-user-modal.component';

describe('OneUserModalComponent', () => {
  let component: OneUserModalComponent;
  let fixture: ComponentFixture<OneUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
