import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCollectionOneComponent } from './chart-collection-one.component';

describe('ChartCollectionOneComponent', () => {
  let component: ChartCollectionOneComponent;
  let fixture: ComponentFixture<ChartCollectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCollectionOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCollectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
