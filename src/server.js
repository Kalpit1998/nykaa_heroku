const connect = require("./configs/db")

const app = require("./index");

const port = 2005 || process.env.PORT

app.listen(port, async (req, res) => {
    await connect()

    console.log(`Listening on PORT ${port}`)
})

