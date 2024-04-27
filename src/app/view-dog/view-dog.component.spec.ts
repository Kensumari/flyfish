import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDogComponent } from './view-dog.component';

describe('ViewDogComponent', () => {
  let component: ViewDogComponent;
  let fixture: ComponentFixture<ViewDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
