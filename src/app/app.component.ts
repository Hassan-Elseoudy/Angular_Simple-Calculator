import { Component } from '@angular/core';
import { AppService } from './app-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CalculatorApp';
  addResult = '0';
  avgResult = '0';
  firstNumber = '0';
  secondNumber = '0';
  numbers = '';


  constructor(private appService: AppService, private toastr: ToastrService) {
  }

  /**
   * Button that evaluated 2 numbers summtion.
   */

  clickOnAddButton() {
    this.appService.addTwoNumbers(this.firstNumber, this.secondNumber)
      .subscribe((response: any) => {
        if (response.success === true) {
          this.toastr.success('Success!', 'Correct!', {
            timeOut: 3000,
          });
          this.addResult = response.result;
        } else {
          this.toastr.error('Error!', 'Major Error', {
            timeOut: 3000,
          });
          this.addResult = '0';
        }
      });
  }

  /**
   * Split the numbers string of delimter (,)
   */
  clickOnAverageButton() {
    const numbersArray = this.numbers.split(',');

    this.appService.averageNumbers(numbersArray).subscribe((response: any) => {
      if (response.success === true) {
        this.toastr.success('Success!', 'Correct!', {
          timeOut: 3000,
        });
        this.avgResult = response.result;
      } else {
        this.toastr.error('Error!', 'Major Error', {
          timeOut: 3000,
        });
        this.avgResult = '0';
      }
    });
  }

}
