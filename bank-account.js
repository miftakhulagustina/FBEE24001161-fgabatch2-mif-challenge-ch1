//Fungsi menambah saldo
let tambahSaldo = () => saldo + +amount;

//Fungsi mengurangi saldo
let kurangiSaldo = () => {
    if (amount <= saldo) {
        return saldo - amount;
    }
    else {
        return "tidak mencukupi untuk melakukan transaksi";
    }
}

let saldo = 250000;
let amount = window.prompt("Silahkan masukkan nominal! \nSaldo Anda saat ini adalah " + saldo);
let pilih = window.prompt("Silahkan pilih transaksi! \n 1. tambah saldo \n 2. kurangi saldo");
if (pilih == 1) {
    console.log("Saldo Anda saat ini " + tambahSaldo());
} else if (pilih == 2) {
    console.log("Saldo Anda saat ini " + kurangiSaldo());
} else {
    console.log("Input tidak sesuai! \nSilahkan input (1) untuk menambah saldo atau (2) untuk mengurangi saldo");
}
