const input = document.getElementById("input");
function reverseString(str) {
  return str.split("").reverse().join("");
}
function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value == reverse) {
    alert("it is a palindrome");
  } else {
    alert("not a palindrome");
  }
}
