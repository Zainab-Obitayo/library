const books = require('../models/bookModel');

//get all list of books
const getBooks = (req, res) => {
    

    res.status(200).json(books)
    
};


//get  a single book by id
const getBook = async (req, res) => {
    const { id } = req.params

    const book = await books.findById(id)
    if (!book) { 
        return res.status(404).json({error: "No such book"})
    }
    res.status(200).json(book)
};


//add a new book


const createBook = (req, res) => {
    const { id, title, author, publishedDate, summary } = req.body;

    if (!id || !title || !author) {
        return res.status(400).json({
            error: 'Missing required fields. Please provide id, title, and author.'
        });
    }

    const newBook = {
        id: id,
        title: title,
        author: author,
        publishedDate: publishedDate,
        summary: summary
    };

    // Add the new book to the in-memory array
    books.push(newBook);

    res.status(201).json(newBook);
};




// Update a book in the array by id
const updateBook = (req, res) => {
    const { id } = req.params;
    
    const index = books.findIndex(book => book.id == id);
    if (index === id) {
        return res.status(404).json({ error: "No such book" });
    }

    books[index] = { ...books[index], ...req.body };
    res.status(200).json(books[index]);
};

// Delete a book from the array by id
const deleteBook = (req, res) => {
    const { id } = req.params;

    const index = books.findIndex(book => book.id == id);
    if (index === id) {
        return res.status(404).json({ error: "No such book" });
    }

    const deletedBook = books.splice(index, 1)[id];
    res.status(200).json(deletedBook);
};
module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}
