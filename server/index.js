const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

const users = [{
        email: "guest@gmail.com",
        password: "abcd1234",
        isDoctor: true,
    },
    {
        email: "abcd@gmail.com",
        password: "efgh",
        isDoctor: false,
    }
]

app.get("/api", (req, res) => {
    res.json(users);

    console.log(users)
})

app.post('/api', (req, res) => {
    console.log(req.body);
    const user = req.body.user;
    console.log('Adding user:::::', user);
    users.push(user);
    res.json("user addedd");
    console.log(users)
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});