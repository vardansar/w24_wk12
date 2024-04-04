document.getElementById("sameAddress").addEventListener("click", function(){
    console.log("its working")

    if (this.checked) {
        document.getElementById("home").value = document.getElementById("bill").value
      }

      else {
        document.getElementById("home").value = ""
      }

})










// function checkIfSameAddress(element) {
//     console.log(element.checked);

//     if (element.checked) {
//       document.getElementById('home').value = document.getElementById("bill").value
//     }

//     else {
//       document.getElementById('home').value = ""
//     }
//   }


