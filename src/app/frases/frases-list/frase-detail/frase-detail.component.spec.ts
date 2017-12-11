import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseDetailComponent } from './frase-detail.component';

describe('FraseDetailComponent', () => {
  let component: FraseDetailComponent;
  let fixture: ComponentFixture<FraseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
