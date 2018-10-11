import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  ChkInPage = {
    title: 'บันทึกการเข้าพัก',
    cid:'เลขบัตรประจำตัวประชาขน:',
    name: 'ชื่อ - นามสกุล:',
    tName: ['นาย','นาง','นางสาว'],
    fName: 'ชื่อ',
    lName: 'นามสกุล',
    num: 'หมายเลขห้อง:',
    no: ['VIP1','VIP2','111','112','113','114','115','116','117','118','119','120','121','123','124','125'],
    chkBooking: 'ตรวจสอบการจอง:',
    address: 'ที่อยู่ที่ใช้ในการออกใบเสร็จ:',
    dateBook: 'กรุณากรอกวันที่รับจอง:'
    
    
  };
  

  constructor() { }

  ngOnInit() {
  }

}
