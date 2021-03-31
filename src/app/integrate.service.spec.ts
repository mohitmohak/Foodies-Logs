import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IntegrateService } from './integrate.service';

describe('IntegrateService', () => {
  let service: IntegrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        FormsModule,],
    });
    service = TestBed.inject(IntegrateService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
