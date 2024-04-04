document.getElementById("ch3form").addEventListener("submit", function (e) {
    console.log("this works")

    let standing = document.querySelectorAll('input[name="gradDate"]:checked').length;
    let gradDate = document.querySelectorAll('input[name="standing"]:checked').length;

    if (standing === 0 || gradDate === 0) {
        alert("hi");
        e.preventDefault();
    }


    // for (let i = 0; i < standing.length; i++) {
    //     if (standing[i].checked) {
    //         state = true;
    //         break;
    //     }
    //     else {
    //         state = false;
    //     }
    // }

    // for (let i = 0; i < gradDate.length; i++) {
    //     if (gradDate[i].checked) {
    //         state = true;
    //         break;
    //     }
    //     else {
    //         state = false;
    //     }
    // }

    // if (state === false) {
    //     alert("please fill");
    // }





}
)