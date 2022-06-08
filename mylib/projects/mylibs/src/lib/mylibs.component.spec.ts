import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylibsComponent } from './mylibs.component';

describe('MylibsComponent', () => {
  let component: MylibsComponent;
  let fixture: ComponentFixture<MylibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MylibsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MylibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
