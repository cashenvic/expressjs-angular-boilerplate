import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PaiementsComponent} from './paiements.component';

describe('PaiementsComponent', () => {
  let component: PaiementsComponent;
  let fixture: ComponentFixture<PaiementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaiementsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
