//Fungsi menambah saldo
let tambahSaldo = (amount) => {
    if (amount >= 0) {
        tambah = saldo + +amount;
        return "Saldo saat ini " + tambah;
    } else {
        return "Inputan tidak sesuai!";
    }
}

//Fungsi mengurangi saldo
let kurangiSaldo = (amount) => {
    if (amount <= saldo && amount >= 0) {
        kurang = saldo - amount;
        return "Saldo saat ini " + kurang;
    }
    else if (amount <= 0) {
        return "Inputan tidak sesuai!";
    } else {
        return "Saldo tidak mencukupi untuk melakukan transaksi";
    }
}

let saldo = 250000;
let amount = window.prompt("Silahkan masukkan nominal! \nSaldo Anda saat ini adalah " + saldo);
let pilih = window.prompt("Silahkan pilih transaksi! \n 1. tambah saldo \n 2. kurangi saldo");
if (pilih == 1) {
    console.log(tambahSaldo(amount));
} else if (pilih == 2) {
    console.log(kurangiSaldo(amount));
} else {
    console.log("Input tidak sesuai! \nSilahkan input (1) untuk menambah saldo atau (2) untuk mengurangi saldo");
}
