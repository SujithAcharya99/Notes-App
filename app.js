const vald = require("chalk")

const yar = require("yargs")

const nodesutils = require('./utils.js');

yar.version('1.1.0')

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
    handler(argv) {
        nodesutils.removeNotes(argv.title)
    }
});

// command to list all note
yar.command({
    command : "list",
    describe :  " list all note",
    handler() {
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
    handler(argv) {
        nodesutils.readNotes(argv.title)
    }
});
yar.parse()
