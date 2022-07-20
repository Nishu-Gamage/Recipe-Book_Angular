import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShoppingListComponent } from './display-shopping-list.component';

describe('DisplayShoppingListComponent', () => {
  let component: DisplayShoppingListComponent;
  let fixture: ComponentFixture<DisplayShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayShoppingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
