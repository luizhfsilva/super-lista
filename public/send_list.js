function sendList(){
    // var tableList = document.getElementById("table_list");
    var tableListUnidade = document.getElementsByClassName("unidade");
    var tableListNome = document.getElementsByClassName("nome");
    var tableListQuantidade = document.getElementsByClassName("quantidade");
    var listText = '';
    console.log(tableListQuantidade);
    for (var i = 0; i < tableListNome.length; i++){
        if (tableListQuantidade[i].value) {
            listText += tableListQuantidade[i].value + " ";
            listText += tableListUnidade[i].innerHTML + " ";
            listText += tableListNome[i].innerHTML + " ";
            listText += "\n";
        }
    }
    console.log("### message: ###");
    console.log(encodeURI(listText));
    var messageWhatsapp = "https://api.whatsapp.com/send?text=";
    messageWhatsapp += encodeURI(listText) + "&lang=pt_br";
    console.log(messageWhatsapp);
    location.href = messageWhatsapp;
}
