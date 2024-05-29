const express = require('express');
const router = express.Router();
const {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} =require('../controller/bookController')



/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Return a list of books
 *     responses:
 *       200:
 *         description:  Return a comprehensive list of all books.
 *         content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: number
 *                                  title:
 *                                      type: string
 *                                  author:
 *                                      type: string
 *                                  publishedDate:
 *                                      type: string
 *                                      format: date
 *                                  summary:
 *                                      type: string

 *           
 *   
 */

//get all list of books
router.get('/', getBooks)


/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Return a list of books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: book id
 *     responses:
 *       200:
 *         description: successful  
 *         content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: number
 *                              title:
 *                                  type: string
 *                              author:
 *                                  type: string
 *                              publishedDate:
 *                                  type: string
 *                                  format: date
 *                              summary:
 *                                  type: string
          
 *       400:
 *         description: No such book
 *          
 *   
 */
//get a single book by id
router.get('/:id', getBook)


/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Creates a new book.
 *     parameters:
 *          - in: body
 *            name: newbook
 *            required: true
 *            description: the book to create
 *            schema:
 *              type: object   
 *              properties: 
 *               id:
 *                 type: number
 *               title:
 *                 type: string
 *              author:
 *                 type: string
 *              publishedDate:
 *                 type: string
 *              summary:
 *                 type: string
 *     responses:
 *         201:
 *           description: book added successfully
 *           content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: number
 *                              title:
 *                                  type: string
 *                              author:
 *                                  type: string
 *                              publishedDate:
 *                                  type: string
 *                                  format: date
 *                              summary:
 *                                  type: string
 *          
 */
//add a new book
router.post('/:id', createBook)


/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update an existing book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publishedDate:
 *                 type: string
 *                 format: date
 *               summary:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated book
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 publishedDate:
 *                   type: string
 *                   format: date
 *                 summary:
 *                   type: string
 *       404:
 *         description: No such book
 */


// Update an existing book by id
router.put('/:id', updateBook);

/** 
* @swagger
* /api/books/{id}:
*   delete:
*     summary: Delete a book by ID
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*         description: The book ID
*     responses:
*       200:
*         description: The deleted book
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: integer
*                 title:
*                   type: string
*                 author:
*                   type: string
*                 publishedDate:
*                   type: string
*                   format: date
*                 summary:
*                   type: string
*       404:
*         description: No such book
*/


// Delete a book by id
router.delete('/:id', deleteBook);

module.exports = router;
