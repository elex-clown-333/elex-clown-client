// let exec = require('child_process').exec;
// let p = new Promise(resolve=>{
//     const execSync = require('child_process').execSync;
// // import { execSync } from 'child_process';  // replace ^ if using ES modules
//
//     const output = execSync('node ./elex-hrin/dist/main', { encoding: 'utf-8' });  // the default is 'buffer'
//     console.log('Output was:\n', output);
//
//     setTimeout(()=>{
//         resolve(null)
//     },500)
// })
// p.then(h=>{
//     exec('electron . --watch')
// })
//

// const util = require('node:util');
// const exec = util.promisify(require('node:child_process').exec);
//
//
// (async function () {
//     const { stdout, stderr } = await exec('node elex-hrin/dist/main');
//     console.log('stdout:', stdout);
//     console.log('\n\n\n')
//     console.error('stderr:', stderr);
// })()

const { spawn } = require('node:child_process');
const fs = require("fs");
const gnizdo = spawn('node', ['elex-hrin/dist/main']);

gnizdo.stdout.on('data', (data) => {
   const content = data.toString();

    fs.writeFile('./log.txt', content, { flag: 'a+' }, err => {
        if (err) {
            console.error(err);
        }
    })

    if (data.toString().includes('Nest application successfully started')) {
        const electro = spawn('electron', ['.'])
        electro.stderr.on('error', (err) => {
            console.log(err)
        })
    }
});

gnizdo.stderr.on('error', (err) => {
    console.log(err)
    const fs = require('fs');

    const content = err.message.toString();

    fs.writeFile('./err.txt', content, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });

})

