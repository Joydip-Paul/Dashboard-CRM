import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCollectionTwoComponent } from './chart-collection-two.component';

describe('ChartCollectionTwoComponent', () => {
  let component: ChartCollectionTwoComponent;
  let fixture: ComponentFixture<ChartCollectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCollectionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCollectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
