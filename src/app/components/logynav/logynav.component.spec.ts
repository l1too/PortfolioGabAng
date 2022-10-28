import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogynavComponent } from './logynav.component';

describe('LogynavComponent', () => {
  let component: LogynavComponent;
  let fixture: ComponentFixture<LogynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
