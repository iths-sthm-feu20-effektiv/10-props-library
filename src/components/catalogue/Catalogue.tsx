import { useState } from 'react'
import BookCard from './BookCard'
import { Book } from '../../types/Book'


const books: Book[] = [
	{ id: 1, title: 'Fellowship of the ring', author: 'J.R.R. Tolkien' },
	{ id: 2, title: 'DaVinci koden', author: 'Dan Brown' },
	{ id: 3, title: 'Animal farm', author: 'George Orwell' },
	{ id: 4, title: 'Angry white pyjamas', author: 'Robert Twigger' },
	{ id: 5, title: 'The tipping point', author: 'Malcolm Gladwell' },
	{ id: 6, title: 'Bret Easton Ellis och de andra hundarna', author: 'Lina Wolff' },
	{ id: 7, title: 'Harry Potter och hemligheternas kammare', author: 'J.K. Rowling' }
]

interface Props {
	liftBookBorrowed: (book: Book) => void
}

const Catalogue = ({ liftBookBorrowed }: Props) => {
	const [bookList, setBookList] = useState(books)

	// Use this function to borrow a book. Updates state in this component
	const borrowBook = (borrowedBook: Book) => {
		// 1. uppdatera state i den här komponenten
		// 2. informera BorrowList om att en bok blivit utlånad
		let newList = bookList.filter(
			book => book.id !== borrowedBook.id
		)
		setBookList(newList)

		liftBookBorrowed(borrowedBook)
	}

	return (
		<section className="border">
			<h1> Catalogue</h1>

			<div className="book-container">
			{ bookList.map(book => <BookCard book={book} borrowBook={borrowBook} key={book.id} />) }

			</div>
		</section>
	)
}

export default Catalogue
