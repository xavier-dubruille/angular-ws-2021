import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionPanelComponent } from './adoption-panel.component';

describe('AdoptionPanelComponent', () => {
  let component: AdoptionPanelComponent;
  let fixture: ComponentFixture<AdoptionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
