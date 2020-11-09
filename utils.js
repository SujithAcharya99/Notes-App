// console.log("hello iam utils :-)")

// let num = 5;

// const sum = function (a,b) {
//     return a + b;
// }

const fs = require('fs')
const vald = require("chalk");
const { default: chalk } = require('chalk');
const { title } = require('process');

/*const getNotes = () => {
    return "your name..";
}*/


const addNote = (title,body) => {
    
    const notes = loadNotes()
   //const duplicatenNotes = notes.filter((note) =>  note.title === title)

        //{return note.title=== title})

    const duplicatenNote = notes.find((note) =>  note.title === title)

   //if (duplicatenNotes.length === 0) {

    if (!duplicatenNote) {
    notes.push({
        title : title,
        body : body
    })
    //console.log(notes)
    
    saveNotes(notes)
    console.log(vald.green.bold.inverse("New Notes Added"))
   } else {
       console.log(vald.red.bold.inverse("title already taken"))
   }

   
}


const saveNotes = (notes) => {

    const data2 = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , data2)
}


const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes.json')
        const data1 = buffer.toString()
        return JSON.parse(data1)
    } catch (e) {
        return []
    }

}
//****************REMOVE NOTE FUNCTION************************* */
const removeNotes = (title) => {
    //console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(vald.green.bold.inverse("Removed A Notes "))
    } else {
        console.log(vald.red.bold.inverse("No Matching Note Found"))
    }
    saveNotes(notesToKeep)

}
//****************LISTING NOTE FUNCTION************************* */

const listNotes = () =>{

    const notes = loadNotes()

    console.log(vald.blue.inverse('your notes'))

    notes.forEach((note) => {
        console.log(note.title)
        
    });
}
//****************READING NOTE FUNCTION************************* */

const readNotes = (title) => {

    const notes = loadNotes()
    //const note = notes.find((note) => note.title === title)
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(vald.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(vald.red.inverse('note not found'))
    }
}


//module.exports = sum;

module.exports = {
   // getNotes: getNotes,
    addNote : addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}
