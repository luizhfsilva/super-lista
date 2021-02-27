const { exec } = require("child_process");
const path = require('path')
const dotenv = require('dotenv')

const result = dotenv.config()

// if (result.error) {
//     throw result.error
// }
// console.log(result.parsed)

// heroku pg:reset ${process.env.HEROKU_TARGET} --app super-lista --confirm super-lista

exec(`heroku pg:push ${process.env.PGDATABASE} ${process.env.HEROKU_TARGET} --app super-lista`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

