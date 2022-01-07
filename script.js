//switch case
var input = prompt("pilih 1.if/else, 2.Ternary operator, 3.For Loop, 4.For in loop, 5.For off Loop, 6.while");
switch (input) {
  case "1":
    //if/else
    var angka = "15";
    console.log("angka = " + angka);
    if (angka % 2 == 0) {
      console.log(angka + " adalah ganjil");
    } else {
      console.log(angka + " adalah genap");
    }
    break;

  case "2":
    //Ternary operator
    var tebakangka = prompt("Masukan Tebakan Angka 1-3 = ");
    var tebak = tebakangka == 2 ? "Benar" : "Salah";
    console.log("Tebakan Anda " + tebak);
    break;

  case "3":
    break;

  case "4":
    break;

  case "5":
    break;

  case "6":
    break;
}
