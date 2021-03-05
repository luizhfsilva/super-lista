function sendList(){
    // var tableList = document.getElementById("table_list");
    var unities = document.getElementsByClassName("unity")
    var names = document.getElementsByClassName("name")
    var quantities = document.getElementsByClassName("quantity")
    var msg = '';
    // console.log(quantities);
    // console.log(names);
    // console.log(unities);
    [...names].forEach((name, i) => {
        if (quantities[i].value) {
            msg += quantities[i].value+" "
                +unities[i].innerHTML+" "+names[i].innerHTML+"\n"
        }
    })
    // console.log("### message: ###");
    // console.log(encodeURI(textMessage));
    msg = "https://api.whatsapp.com/send?text=" + encodeURI(msg) + "&lang=pt_br"
    // console.log(messageWhatsapp);
    location.href = msg
}
