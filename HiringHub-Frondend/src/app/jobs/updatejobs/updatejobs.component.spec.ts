import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejobsComponent } from './updatejobs.component';

describe('UpdatejobsComponent', () => {
  let component: UpdatejobsComponent;
  let fixture: ComponentFixture<UpdatejobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatejobsComponent ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
