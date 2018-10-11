import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-vip',
  templateUrl: './booking-vip.component.html',
  styleUrls: ['./booking-vip.component.css']
})
export class BookingVipComponent implements OnInit {

  bookPage = {
    imgVip1 : 'assets/dist/img/roomvip/vip1.jpg',
    imgVip2 : 'assets/dist/img/roomvip/vip2.jpg',
    imgVip3 : 'assets/dist/img/roomvip/vip6.jpg',
    imgSave1 : 'assets/dist/img/room/room1.jpg',
    imgSave2 : 'assets/dist/img/room/room2.jpg',
    imgSave3 : 'assets/dist/img/room/room3.jpg',


    txBookNum : 'จำนวนห้องพัก',
    no : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
    num : ['1','2']
  }


  constructor() { }

  ngOnInit() {
  }

}
