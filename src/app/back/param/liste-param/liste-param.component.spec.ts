import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParamComponent } from './liste-param.component';

describe('ListeParamComponent', () => {
  let component: ListeParamComponent;
  let fixture: ComponentFixture<ListeParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
