import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdeesRecettes } from './idees-recettes';

describe('IdeesRecettes', () => {
  let component: IdeesRecettes;
  let fixture: ComponentFixture<IdeesRecettes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeesRecettes],
    }).compileComponents();

    fixture = TestBed.createComponent(IdeesRecettes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
