const inputField = document.getElementById("inputNomer");
const boxHasil = document.getElementById("box-hasil");
const outDigit = document.getElementById("out-digit");
const outTotal = document.getElementById("out-total");
const outMod = document.getElementById("out-mod");
const outStatus = document.getElementById("out-status");

inputField.addEventListener("input", function (e) {
  let value = e.target.value;
  let cleanValue = value.replace(/\D/g, "");

  if (cleanValue.length > 0) {
    if (cleanValue.length > 13) cleanValue = cleanValue.substring(0, 13);
    e.target.value = cleanValue;
  } else {
    e.target.value = "";
  }
  boxHasil.classList.add("sembunyi");
});

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let cleanValue = e.target.value;

    // ALERT JIKA BUKAN 13 DIGIT
    if (cleanValue.length !== 13) {
      alert("Harap masukkan tepat 13 digit angka!");
      return;
    }

    if (cleanValue.length > 0) {
      prosesHitung(cleanValue);
    }
  }
});

function prosesHitung(angkaStr) {
  let totalPenjumlahan = 0;
  for (let i = 0; i < angkaStr.length; i++) {
    let angka = parseInt(angkaStr[i]);
    let pengali = i % 2 === 0 ? 1 : 3;
    totalPenjumlahan += angka * pengali;
  }
  let sisaBagi = totalPenjumlahan % 10;
  tampilkanHasil(angkaStr.length, totalPenjumlahan, sisaBagi);
}

function tampilkanHasil(jumlahDigit, total, sisa) {
  outDigit.textContent = jumlahDigit;
  outTotal.textContent = total;
  outMod.textContent = sisa;
  boxHasil.classList.remove("valid", "invalid");

  if (sisa === 0) {
    boxHasil.classList.add("valid");
    outStatus.textContent = "VALID ✅";
  } else {
    boxHasil.classList.add("invalid");
    outStatus.textContent = "TIDAK VALID ❌";
  }
  boxHasil.classList.remove("sembunyi");
}
