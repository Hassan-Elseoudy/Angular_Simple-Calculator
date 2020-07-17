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


  constructor(private appService: AppService, private toastr: ToastrService) {
  }


  clickOnAddButton() {
    this.appService.addTwoNumbers(8, 10).subscribe((response: any) => {
      if (response.status === 200) {
        this.toastr.success('Success!');
        this.addResult = response.result;
      } else {
        this.toastr.error('Error!');
        this.addResult = '0';
      }
    });
  }

  clickOnAverageButton() {
    this.appService.averageNumbers([1, 2, 3, 4, 5]).subscribe((response: any) => {
      console.log(response);
      if (response.status === 200) {
        this.toastr.success('Success!');
        this.avgResult = response.result;
      } else {
        this.toastr.error('Error!');
        this.avgResult = '0';
      }
    });
  }


}
