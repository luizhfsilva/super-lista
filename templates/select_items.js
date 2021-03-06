module.exports = (data) =>
`<html>
    <head>
        <title>Super Lista Compras</title>
        <link href="static/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="static/niceicon.jpg" rel="icon" sizes="128x128"/>
        <link href="static/styles.css" rel="stylesheet" type="text/css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;700&display=swap" rel="stylesheet">
        <script src="static/send_list.js"></script>
    </head>

    <body>
        <div class="top-bar">
            Digite a quantia para Comprar:
        </div>
        <form class="content">

            ${ [...new Set(data.map(item => item.category))].sort().map(cat =>`

                <h3>${cat}</h3>
                <table>

                ${ data.filter(item => item.category == cat)
                   .sort((a, b) => a.name.localeCompare(b.name))
                   .map(item => `

                            <tr>
                                <td><input class="quantity" type="number"></td>
                                <td class="unity">${ item.unity }</td>
                                <td class="name">${ item.name }</td>
                            </tr>

                `).join('') }

                </table>

            `).join('') }

        </form>
        <div class="bottom-bar">
            <a onclick="sendList()">
                <div class="send"><img src="static/send-24px.svg"></div>
            </a>
            <div class="text">Enviar via Whatsapp</div>
        </div>
    </body>
</html>`
