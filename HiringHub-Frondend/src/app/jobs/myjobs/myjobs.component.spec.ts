import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobsComponent } from './myjobs.component';

describe('MyjobsComponent', () => {
  let component: MyjobsComponent;
  let fixture: ComponentFixture<MyjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
