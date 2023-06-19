
//Inicio
function telephoneCheck(str) { //Revisar si el telefono (str) es valido en USA
  const digits = str.replace(/\D/g, "");

  if (digits.length === 10) {
    return true;
  } else if (digits.length === 11 && digits.charAt(0) === "1") {
    return true;
  } else if (digits.length === 11) {
    return false;
  } else if (
    digits.length === 7 ||
    (digits.length === 8 && str.charAt(0) === "(" && str.charAt(4) === ")")
  ) {
    return false;
  } else if (
    digits.length === 12 &&
    str.charAt(0) === "(" &&
    str.charAt(1) === ")" &&
    str.charAt(5) === ")" &&
    (str.charAt(9) === "-" || digits.charAt(9) === " ") &&
    str.charAt(2) === ")"
  ) {
    return true;
  } else {
    return false;
  }
}


console.log(telephoneCheck("1 555)555-5555"));



