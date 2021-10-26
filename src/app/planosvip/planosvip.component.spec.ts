import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosvipComponent } from './planosvip.component';

describe('PlanosvipComponent', () => {
  let component: PlanosvipComponent;
  let fixture: ComponentFixture<PlanosvipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosvipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosvipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
