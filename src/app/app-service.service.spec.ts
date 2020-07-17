import { TestBed } from '@angular/core/testing';

import { AppService } from './app-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
interface SuccessResult {
  success: boolean;
  result: number;
}

interface ErrorResult {
  success: boolean;
  error: number;
}

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    appService = TestBed.get(AppService);
  });

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('should get the data successfully', (done: DoneFn) => {
    appService.addTwoNumbers('1', '2').subscribe(
      (result: SuccessResult) => {
        expect(result.result).toEqual(3);
        done();
      }
    );
  });

  it('should get the data wrong', (done: DoneFn) => {
    appService.addTwoNumbers('dskm', '2').subscribe(
      (result: ErrorResult) => {
        expect(result.success).toEqual(false);
        done();
      }
    );
  });

  it('should get the data wrong', (done: DoneFn) => {
    appService.addTwoNumbers('dskm', '  ').subscribe(
      (result: ErrorResult) => {
        expect(result.success).toEqual(false);
        done();
      }
    );
  });

  it('should get the right average', (done: DoneFn) => {
    appService.averageNumbers(['1', '2', '3', '4', '5', '6', '7', '8', '9']).subscribe(
      (result: SuccessResult) => {
        expect(result.success).toEqual(true);
        expect(result.result).toEqual(5);
        done();
      }
    );
  });

  it('should get the data wrong', (done: DoneFn) => {
    appService.averageNumbers(['1', '5', 'jdfdkj', 'sjfbshb']).subscribe(
      (result: ErrorResult) => {
        expect(result.success).toEqual(false);
        done();
      }
    );
  });

});
