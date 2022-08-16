import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeInfoComponent } from './subscribe-info.component';

describe('SubscribeInfoComponent', () => {
  let component: SubscribeInfoComponent;
  let fixture: ComponentFixture<SubscribeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
