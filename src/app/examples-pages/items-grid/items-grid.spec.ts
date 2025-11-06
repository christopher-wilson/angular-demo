import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGrid } from './items-grid';

describe('ItemsGrid', () => {
  let component: ItemsGrid;
  let fixture: ComponentFixture<ItemsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
