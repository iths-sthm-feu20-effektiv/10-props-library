import { useState } from 'react'
import { Book } from '../../types/Book'
import BookCard from './BookCard'


const BorrowList = () => {
	const [borrowed, setBorrowed] = useState<Book[]>([])

	return (
		<section className="border">
		   <h1> Borrowed </h1>

			<div className="book-container">
			{ borrowed.map(book => <BookCard book={book} />) }
			</div>
		</section>
	)
}

export default BorrowList
