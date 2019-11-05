const express = require('./RpcDataToMongo/node_modules/express');
const app = express();

const Quequ = require("./RpcDataToMongo/lib/TaskQueue");
const taskQue = new Quequ(10);

app.get('/job1', async function (req, res) {
    await Job("Validate");
    taskQue.pushTask(async done => {
        await Job("Check IP");
        done();
    });
    taskQue.pushTask(async done => {
        await Job("Save to Mysql");
        done();
    });
    taskQue.pushTask(async done => {
        await Job("Save to Mongo");
        done();
    });
    taskQue.pushTask(async done => {
        await Job("Save Email to User");
        done();
    });
    res.send('User was registered');
});

app.get('/job2', async function (req, res) {
    for (let i=0; i<500000; i++) {
        taskQue.pushTask(async done => {
            await Job(i);
            done();
        });
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