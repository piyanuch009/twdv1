import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
