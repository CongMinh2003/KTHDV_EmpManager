import { Component, OnInit } from '@angular/core';
import { TinhluongService } from '../Service/tinhluong.service';

interface Employee {
  name: string;
  salary: number;
  bonus: number;
  deduction: number;
}

@Component({
  selector: 'app-tinh-luong',
  templateUrl: './tinhluong.component.html',
  styleUrls: ['./tinhluong.component.css']
})
export class TinhLuongComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private tl: TinhluongService) { } 

  ngOnInit() {
    this.tl.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  // Hàm tính tổng lương
  getTotalSalary(employee: Employee): number {
    return employee.salary + employee.bonus - employee.deduction;
  }
}
