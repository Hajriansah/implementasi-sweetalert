var namaError = document.getElementById("nama");
var tglError = document.getElementById("ttl");
var telpError = document.getElementById("no");
var alamatError = document.getElementById("alamat");
var submitError = document.getElementById("submit");

function validatename() {
    var name = document.getElementById("bionama").value;

    if(name.length == ""){
        namaError.innerHTML = "Nama Tidak Boleh Kosong";
        return false;
    }
    else {
    namaError.innerHTML = "";
    return true;
    }
}
function validatetgl() {
    var tanggal = document.getElementById("biottl").value;

    if(tanggal.length == ""){
        tglError.innerHTML = "Tanggal Tidak Boleh Kosong";
        return false;
    }
    else{
    tglError.innerHTML = "";
    return true;
    }
}
function validatetelp() {
    var telpon = document.getElementById("biono").value;

    if(telpon.length == ""){
        telpError.innerHTML = "No. Telpon Tidak Boleh Kosong";
        return false;
    }
    else {
    telpError.innerHTML = "";
    return true;
    }
}
function validatealamat() {
    var alamat = document.getElementById("bioalamat").value;

    if(alamat.length == ""){
        alamatError.innerHTML = "Alamat Tidak Boleh Kosong";
        return false;
    }
    else{
    alamatError.innerHTML = "";
    return true;
    }
}