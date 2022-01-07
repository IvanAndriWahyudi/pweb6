//switch case
var input = prompt("pilih 1.if/else, 2.Ternary operator, 3.For Loop, 4.For in loop, 5.For off Loop, 6.while");
switch (input) {
  case "1":
    //if/else
    console.log("IF/ELSE");
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
    console.log("TERNARY OPERATOR");
    var tebakangka = prompt("Masukan Tebakan Angka 1-3 = ");
    var tebak = tebakangka == 2 ? "Benar" : "Salah";
    console.log("Tebakan Anda " + tebak);
    break;

  case "3":
    //forloop
    console.log("FOOR LOOP");
    var kelipatan = prompt("Masukan Angka Kelipatan = ");
    var i;
    for (i = 1; i <= 20; i++) {
      if (i % kelipatan == 0) console.log("angka = " + i);
    }
    break;

  case "4":
    //for in loop
    console.log("FOR IN LOOP");
    let mobil = {
      namaPemilik: "Ivan",
      model: "Honda Civic",
      type: "Sport",
      warna: "Putih",
      noPolosi: "BM2322GD",
    };
    for (let a in mobil) {
      console.log(a, ":", mobil[a]);
    }
    break;

  case "5":
    break;

  case "6":
    break;
}
