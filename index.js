function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    // if (display.validate(book)) {

    //     display.add(book);
    //     display.clear();
    //     display.show('success', 'Your book has been successfully added')
    // }
    // else {
    //     // Show error to the user
    //     display.show('danger', 'Sorry you cannot add this book');
    // }
    e.preventDefault();
}