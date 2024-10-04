//  const {linearsearch,binarysearch} = require('./searching.js'); 
//  console.log(linearsearch)
//  console.log(binarysearch)

const fs = require('fs/promises');

async function readSampleFile() {
    const data = await fs.readFile('./sample.txt','utf-8');
    console.log(data);
    
}

async function writesampleFile() {
    
    await fs.writeFile('./sample.txt','Hello world1')
}

async function appendSampleFile() {
    await fs.appendFile('./sample.txt','Hello world')
}

appendSampleFile()

// writesampleFile()

// readSampleFile()