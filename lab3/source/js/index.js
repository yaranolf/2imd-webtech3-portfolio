class Note {
  constructor(title) {
    this.title = title;
    console.log ("geklikt");
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  }
  
  createElement(title){
    //note aanmaken & remove btn bijvoegen
    let newNote = document.createElement('div');
    let removeBtn = document.createElement('a');
    removeBtn.innerHTML = 'Remove';
    removeBtn.addEventListener('click', this.remove.bind(newNote));

    //'inhoud' note aanmaken
    let content = document.createElement('p');
    content.innerHTML = this.title;

    newNote.appendChild(textInput);
    newNote.appendChild(removeBtn);
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector('.notes').appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    let arr = JSON.parse(localStorage.getItem('note'));
    
    if(arr == null){
      arr = [];
    }

    arr.push(this.title);
    localStorage.setItem(`note`, JSON.stringify(arr));
    }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

    let removeNote = JSON.parse(localStorage.getItem('note'));
    let noteIndex = removeNote.indexOf(this);
    removeNote.splice(noteIndex, 1);
    localStorage.setItem('note', JSON.stringify(removeNote));
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();

    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
    let newnote = new Note();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();