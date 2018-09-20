import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomPage = {
    title : 'ห้องพักสไตล์บาหลี',
    saveRoom : 
    {
      title: 'ห้องพักราคาประหยัด',
      imgSrc: 'assets/dist/img/r1.jpg',
      desc: 'ห้องพักขนาด 40 ตร.ม. ห้องพักให้ทัศนียภาพอันงดงามของอ่าวฉลอง, ทะเลอันดามันสีฟ้าอันเขียวชอุ่มและภูเขาที่เขียวชอุ่มของภาคใต้ของภูเก็ต นั่งเล่นบนระเบียงส่วนตัวที่กว้างขวางและชมพระอาทิตย์ตกที่มีมนต์ขลังเนื่องจากวันอื่น ๆ ในสวรรค์สิ้นสุดลง ห้องนั่งเล่นขนาดใหญ่มีเตียงโซฟาและพื้นที่นั่งเล่นเพื่อผ่อนคลายและชมช่องรายการโทรทัศน์ผ่านดาวเทียมระหว่างประเทศ เฟอร์นิเจอร์ที่มีคุณภาพและงานศิลปะไทยเพิ่มสไตล์และชั้นเรียนทำให้การเข้าพักแต่ละครั้งมีความสุขยิ่งขึ้น ห้องพักที่เชื่อมต่อกันมีให้บริการในประเภทนี้'
    },
    vipRoom : 
    {
      title: 'ห้องพัก VIP',
      imgSrc: 'assets/dist/img/r2.jpg',
      desc: 'ดื่มด่ำกับทัศนียภาพที่เงียบสงบของทะเลอันดามันเหนืออ่าวฉลองหาดทรายสีขาวและต้นปาล์มที่เลื่องลือจากพื้นที่ 70 ตร.ม. ของเรา ห้องสวีทริมชายหาดมีห้องนั่งเล่นแยกเป็นสัดส่วนและห้องนอนหันหน้าไปทางชายหาด ห้องพักสะดวกสบายแห่งนี้ให้ความเป็นส่วนตัวเป็นส่วนตัวและสามารถเดินทางไปยังสวนของรีสอร์ทสระว่ายน้ำและชายหาดเป็นสถานที่พักผ่อนที่สมบูรณ์แบบสำหรับคู่รักแสนโรแมนติก ภายในตกแต่งแบบไทยร่วมสมัยพร้อมสิ่งอำนวยความสะดวกครบครันเพื่อการพักผ่อนที่แสนสบาย นอกเหนือจากการออกแบบอย่างมีรสนิยมแล้วห้องพักที่น่าสนใจเหล่านี้ยังสามารถทำงานได้ดีกับพื้นที่นั่งเล่นพื้นที่สำหรับเก็บของและพื้นที่จัดเก็บมีห้องเชื่อมต่อ'
    }

  };
  constructor() { }

  ngOnInit() {
  }

}
