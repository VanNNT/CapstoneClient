import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportComponent } from './list-report.component';

describe('ListReportComponent', () => {
  let component: ListReportComponent;
  let fixture: ComponentFixture<ListReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
