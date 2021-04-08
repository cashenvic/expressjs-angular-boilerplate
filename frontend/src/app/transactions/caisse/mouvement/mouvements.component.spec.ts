import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MouvementsComponent} from './mouvements.component';

describe('MvEntrantComponent', () => {
  let component: MouvementsComponent;
  let fixture: ComponentFixture<MouvementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MouvementsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouvementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
