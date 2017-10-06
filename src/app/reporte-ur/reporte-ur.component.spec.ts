import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUrComponent } from './reporte-ur.component';

describe('ReporteUrComponent', () => {
  let component: ReporteUrComponent;
  let fixture: ComponentFixture<ReporteUrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteUrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteUrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
