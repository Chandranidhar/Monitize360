import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedataComponent } from './purchasedata.component';

describe('PurchasedataComponent', () => {
  let component: PurchasedataComponent;
  let fixture: ComponentFixture<PurchasedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
