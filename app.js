//const fs = require('fs');
//fs.writeFileSync('node_txt.txt','My name is sujith');
//fs.appendFileSync('node_txt.txt','. I live in mangalore');

//const vald = require("validator")

const vald = require("chalk")
//const { command, describe, argv, demandOption } = require("yargs")
//const yargs = require("yargs")

const yar = require("yargs")

const nodesutils = require('./utils.js');

// console.log("hi iam node_1a")
// const sum = no (20,5);
// console.log(sum)

//console.log(vald.isEmail('hha@dg.com'));

//console.log(vald.isURL('http://hha@dg.com'));

//console.log(vald.red.bgBlue.bold("success"));

//console.log(vald.blue.bold.inverse("updated :-)"));

//console.log(process.argv[2])

// const argmnt = process.argv[2];

// if (argmnt === 'add') {
    
//     console.log('ADDING.....')

// }

//console.log(process.argv)

yar.version('1.1.0')

// command to add a new note
// challenge add an option to yargs
//setup a body option to add command hint: use builder
//  configure describtion and make it require and set it to string
//log the body value in handler function

yar.command({
    command : "add",
    describe :  " adding a new note",
    builder : {
        title : {
            describe: "note title",
            demandOption: true,
            type : 'string'
                },
        body : {
            describe: "body note",
            demandOption: true,
            type : 'string'
        }

    },
    handler(argv) {
        // console.log("title :",argv.title)
        // console.log("body :",argv.body)
        nodesutils.addNote(argv.title,argv.body)
       
    }
});
// command to remove a note
yar.command({
    command : "remove",
    describe :  " remove a new note",
    builder : {
        title : {
            describe: "note title",
            demandOption: true,
            type : 'string'
                }
    },
    handler() {
      //  console.log(" removing a note...")
        nodesutils.removeNotes(argv.title)
    }
});

// command to list all note
yar.command({
    command : "list",
    describe :  " list all note",
    handler() {
        //console.log(" listing all note...")
        nodesutils.listNotes()
    }
});

// command to read a note
yar.command({
    command : "read",
    describe :  " read a note",
    builder : {
        title: {
            describe: "note title",
            demandOption: true,
            type : 'string'
        }
    },
    handler() {
        //console.log(" reading a note...")
        nodesutils.readNotes(argv.title)
    }
});

// without using argv "to avoid unwanted printing statement in the console"
yar.parse()
//console.log(yar.argv)
