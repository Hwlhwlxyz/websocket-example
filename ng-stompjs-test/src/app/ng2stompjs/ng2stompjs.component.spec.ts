import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2stompjsComponent } from './ng2stompjs.component';

describe('Ng2stompjsComponent', () => {
  let component: Ng2stompjsComponent;
  let fixture: ComponentFixture<Ng2stompjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2stompjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2stompjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
