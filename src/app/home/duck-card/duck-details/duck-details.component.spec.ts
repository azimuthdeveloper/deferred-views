import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckDetailsComponent } from './duck-details.component';

describe('DuckDetailsComponent', () => {
  let component: DuckDetailsComponent;
  let fixture: ComponentFixture<DuckDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuckDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
