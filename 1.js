const express = require('./RpcDataToMongo/node_modules/express');
const app = express();

app.get('/job1', async function (req, res) {
    await Job("Validate");
    await Job("Check IP");
    await Job("Save to Mysql");
    await Job("Save to Mongo");
    await Job("Save Email to User");
    res.send('User was registered');
});

app.get('/job2', async function (req, res) {
    for (let i=0;i<500000;i++) {
        await Job(i);
    }
    res.send('User was registered');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

Job = async (idJob) => {
    await sleep(()=> {
        console.log(`Finish Job ${idJob}`);
    },3000)
};

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(fn, ms , ...args) {
    await timeout(ms);
    return fn(...args);
}