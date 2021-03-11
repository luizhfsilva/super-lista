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

                <tr id="product_row_container" item="teste" unity="kg" item.name="teste"></tr>

                `).join('') }

                </table>

            `).join('') }

        </form>
        <div class="bottom-bar">
            <a onclick="sendList()">
                <img class="send" src="static/send-24px.svg">
            </a>
            <div class="text">Enviar via Whatsapp</div>
  <!-- ... other HTML ... -->

  <!-- Load React. -->
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

<!-- Load our React component. -->
<script src="static/product_row.js"></script>
        </div>

    </body>
</html>`
