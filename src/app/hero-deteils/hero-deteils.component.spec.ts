import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDeteilsComponent } from './hero-deteils.component';

describe('HeroDeteilsComponent', () => {
  let component: HeroDeteilsComponent;
  let fixture: ComponentFixture<HeroDeteilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDeteilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
