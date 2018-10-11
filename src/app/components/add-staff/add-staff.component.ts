import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  regPage = {
    title: 'กรอกข้อมูลเพื่อสมัครสมาชิก',
    cid:'เลขบัตรประจำตัวประชาขน:',
    name: 'ชื่อ - นามสกุล:',
    tName: ['นาย','นาง','นางสาว'],
    fName: 'ชื่อ',
    lName: 'นามสกุล',
    nationality: 'สัญชาติ:',
    address : 'ที่อยู่: ',
    tel : 'เบอร์โทรศัพท์:',
    email : 'Email:',
    password : 'Password:'
  };

  constructor() { }

  ngOnInit() {
  }

}
