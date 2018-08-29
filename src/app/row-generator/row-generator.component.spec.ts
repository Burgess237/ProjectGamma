import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowGeneratorComponent } from './row-generator.component';

describe('RowGeneratorComponent', () => {
  let component: RowGeneratorComponent;
  let fixture: ComponentFixture<RowGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
