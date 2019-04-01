class Note {
  constructor(title) {
    this.title = title;
    //console.log ("geklikt");
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  }
  
  createElement(title){
    //note aanmaken
    let newNote = document.createElement('div');
    //class card toevoegen voor css
    newNote.setAttribute('class', 'card');
    
    //'inhoud' note aanmaken
    let content = document.createElement('p');
    content.innerHTML = title;
    //removeBtn bijvoegen
    let removeBtn = document.createElement('a');
    //class card-remove toevoegen voor css
    removeBtn.setAttribute('class', 'card-remove');
    //btn klikbaar maken
    removeBtn.setAttribute('href', '#');
    removeBtn.innerHTML = "Remove";
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    removeBtn.addEventListener('click', this.remove.bind(newNote));

    newNote.appendChild(content);
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

    let contentToStore = JSON.parse(localStorage.getItem('note'));
    
    if(contentToStore == null){
      contentToStore = [];
    }

    contentToStore.push(this.title);
    localStorage.setItem('note', JSON.stringify(contentToStore));
    }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

    //https://mariusschulz.com/blog/removing-elements-from-javascript-arrays


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

    this.btnAdd = document.getElementById('btnAddNote');
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice

    let endOfInspiration = JSON.parse(localStorage.getItem('note'));
    if(endOfInspiration != null && (endOfInspiration).length > 0){
      //for-loop?
      endOfInspiration.forEach(item => {
        let note = new Note(item);
        note.add();
      });
    }
  }
  
  reset(){
    // this function should reset the form 
    document.querySelector('#txtAddNote').value='';
  }

  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
    let textInput = document.querySelector('#txtAddNote').value;
    let note = new Note(textInput);
    note.add();
    note.saveToStorage();
    this.reset();
  }
  

}

let app = new App();