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


const Catalogue = () => {
	const [bookList, setBookList] = useState(books)

	return (
		<section className="border">
			<h1> Catalogue</h1>

			<div className="book-container">
			{ bookList.map(book => <BookCard book={book} />) }


			</div>
		</section>
	)
}

export default Catalogue
