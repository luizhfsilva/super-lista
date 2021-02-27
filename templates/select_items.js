module.exports = (data) =>
`<html>
    <head>
        <title>Digite a quantia para comprar:</title>
        <link href="static/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="static/niceicon.jpg" rel="icon" sizes="128x128"/>
        <link href="static/styles.css" rel="stylesheet" type="text/css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;700&display=swap" rel="stylesheet">
        <script src="static/send_list.js"></script>
    </head>

    <body>
        <div class="container">
            <div class="top">
                <div id="titulo" class="text sub">Digite a quantia para Comprar:</div>
            </div>
            <div class="middle">
            <form id="form" class="middle">
                <table id="table_list">
                    <thead>
                        <tr>
                            <th scope="col">Quantia</th>
                            <th></th>
                            <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${ data.map((item) => 
                        `<tr>
                            <td class="quantia">
                            <input class="quantidade" type="number">
                            </td>
                            <td class="unidade">${ item.unity }</td>
                            <td class="nome">${ item.name }</td>
                        </tr>`
                    ).join('') }
                    </tbody>
                </table>
            </form>
            </div>
            <div class="bottom">
                <a onclick="sendList()">
                <div class="send"><img src="static/send-24px.svg" height="80px"></div>
                </a>
                <div class="text">Enviar via Whatsapp</div>
            </div>
        </div>
        <script src="static/scrollintoview.js"></script>
    </body>
</html>`
