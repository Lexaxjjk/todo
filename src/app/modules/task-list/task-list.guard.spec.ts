import { TestBed } from '@angular/core/testing';

import { TaskListGuard } from './task-list.guard';

describe('TaskListGuard', () => {
  let guard: TaskListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TaskListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
