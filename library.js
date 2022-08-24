let myLibrary = [];

class Book {
  constructor(title,
    author,
    pages,
    read,
    coverUrl,
    attribuition,
    bookNumber = myLibrary.length) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.coverUrl = coverUrl;
    this.attribuition = attribuition;
    this.bookNumber = bookNumber;
  }
  info() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary() {
  const newBook = new Book(
    document.querySelector('#title'),
    document.querySelector('#author'),
    document.querySelector('#pages'),
    document.querySelector('#read'),
    document.querySelector('#cover-url'),
    document.querySelector('#attribuition')
    );

  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  // loops through the array and display on their onw card
  bookList.replaceChildren()
  myLibrary.map((book) => {
    const cardBook = document.createElement('div');
    cardBook.classList.add('card');
    cardBook.setAttribute('id', `book${book.bookNumber}`);

    const imageBook = document.createElement('img');
    imageBook['src'] = book.coverUrl;
    imageBook['alt'] = 'book cover';

    cardBook.appendChild(imageBook);

    // card Info
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const pa = document.createElement('p');
    pa.innerHTML = book.attribuition;
    cardInfo.appendChild(pa);

    const title = document.createElement('h2');
    title.textContent = book.title;
    title.classList.add('title');
    cardInfo.appendChild(title);

    const author = document.createElement('h5');
    author.textContent = book.author;
    author.classList.add('author');
    cardInfo.appendChild(author);

    // footer
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    pages.classList.add('pages');
    footer.appendChild(pages);

    const read = document.createElement('p');
    read.textContent = 'Read';
    read.classList.add('read');
    const readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.id = 'read';
    readCheckbox.name = 'read';
    readCheckbox.value = book.read

    read.appendChild(readCheckbox);
    footer.appendChild(read);

    // button remove
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-book', `book${book.bookNumber}`);
    removeButton.addEventListener('click', removeBookFromLibrary)
    const buttonImage = document.createElement('img');
    buttonImage['src'] = './media/round-delete-button-svgrepo-com.svg';
    buttonImage['width'] = 40;
    buttonImage['alt'] = 'remove button';


    removeButton.appendChild(buttonImage);
    footer.appendChild(removeButton);

    cardInfo.appendChild(footer);
    cardBook.appendChild(cardInfo);

    bookList.appendChild(cardBook);
    
  });
}

function removeBookFromLibrary(e) {
  const card = e.currentTarget.parentElement.parentElement.parentElement;
  console.log(card.id.slice(4))
  console.log(myLibrary.splice(card.id.slice(4), 1))
  console.log(myLibrary)
  displayBooks()
}

function readBook() {}



function initialBooks() {
  const winnieBook = new Book(
    'Winnie-the-Pooh',
    'Alan Alexander Milne',
    160,
    true,
    'https://upload.wikimedia.org/wikipedia/commons/3/31/Winnie-the-Pooh_25.png',
    '<a href="https://commons.wikimedia.org/wiki/File:Winnie-the-Pooh_25.png">Ernest Howard Shepard</a>, Public domain, via Wikimedia Commons',
  );

    const theSunAlsoRises = new Book (
      'The Sun Also Rises',
      'Ernest Hemingway',
      222,
      false,
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/The_Sun_Also_Rises_%281st_ed._cover%29.jpg",
      '<a href="https://commons.wikimedia.org/wiki/File:The_Sun_Also_Rises_(1st_ed._cover).jpg" >Jacket design by Cleonike Damianakes.</a>, Public domain, via Wikimedia Commons',

    );

    const theMurderOfRogerAckroyd = new Book (
      'The Murder of Roger Ackroyd',
      'Agatha Christie',
      286,
      true,
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Agatha_Christie_by_Nathaniel_Hughes_John_Baird.png",
      '<a href="https://commons.wikimedia.org/wiki/File:Agatha_Christie_by_Nathaniel_Hughes_John_Baird.png">Nathaniel Hughes John Baird</a>, Public domain, via Wikimedia Commons',

    )

    const theCastle = new Book (
      'The Castle',
      'Frank Kafka',
      0,
      false,
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Kafka_Das_Schloss_1926.jpg",
      '<a href="https://commons.wikimedia.org/wiki/File:Kafka_Das_Schloss_1926.jpg">© Foto H.-P.Haack</a>, Public domain, via Wikimedia Commons'
    )


  myLibrary.push(winnieBook);
  myLibrary.push(theSunAlsoRises);
  myLibrary.push(theMurderOfRogerAckroyd);
  myLibrary.push(theCastle);
  displayBooks();
}

const newBookButton = document.querySelector('.new-book');
newBookButton.addEventListener('click', addBookToLibrary);

const removeBookButtons = document.querySelectorAll('.remove-book');
removeBookButtons.forEach((book) => {
  book.addEventListener('click', removeBookFromLibrary);
});

const bookReadButton = document.querySelectorAll('.read-book');
bookReadButton.forEach((book) => book.addEventListener('click', readBook));

const bookList = document.querySelector('.book-list');

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

initialBooks();

