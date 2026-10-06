import { TestBed } from '@angular/core/testing';
import { ListeCourses } from './liste-courses';

describe('ListeCourses', () => {
  let service: ListeCourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeCourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
