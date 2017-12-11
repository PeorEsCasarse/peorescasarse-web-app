import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesListComponent } from './frases-list.component';

describe('FrasesListComponent', () => {
  let component: FrasesListComponent;
  let fixture: ComponentFixture<FrasesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrasesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
