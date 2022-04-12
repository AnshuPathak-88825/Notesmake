const tx = document.getElementsByTagName("textarea");
// we fetch all textarea tag thats why tx is behave like a array 

for (let i = 0; i < tx.length; i++) {

  tx[i].addEventListener("input", OnInput);
}


function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}