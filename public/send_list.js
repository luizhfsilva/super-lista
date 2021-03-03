function sendList(){
    // var tableList = document.getElementById("table_list");
    var unities = document.getElementsByClassName("unity");
    var names = document.getElementsByClassName("name");
    var quantities = document.getElementsByClassName("quantity");
    var textMessage = '';
    console.log(quantities);
    console.log(names);
    console.log(unities);
    [...names].forEach((name, i) => {
        if (quantities[i].value) {
            textMessage += quantities[i].value + " ";
            textMessage += unities[i].innerHTML + " ";
            textMessage += names[i].innerHTML + " ";
            textMessage += "\n";
        }
    });
    console.log("### message: ###");
    console.log(encodeURI(textMessage));
    var messageWhatsapp = "https://api.whatsapp.com/send?text=";
    messageWhatsapp += encodeURI(textMessage) + "&lang=pt_br";
    console.log(messageWhatsapp);
    location.href = messageWhatsapp;
}
