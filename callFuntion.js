let user = {
  name: "tare",
  say: function() {
    alert(this.name);
  }
};

let user1 = {
  name: "sonTer"
};

// user.say == alert tare

let cloneSay = user.say;

// cloneSay  =  undefined เพราะ this มันไม่รู้ว่า ข้างหน้า . คืออะไร  มันไม่มี

cloneSay.call(user); // alert tare

cloneSay.call(user1); // alert sonTer  เพราะ ใน () ของ call คือ object ก้อนไหน มันจะไปหา object ก้อนนั้น
