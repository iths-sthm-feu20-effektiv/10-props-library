// import { useState } from 'react'
import { Book } from '../../types/Book'
import BookCard from './BookCard'

interface Props {
	borrowed: Book[]
}

const BorrowList = ({ borrowed }: Props) => {

	return (
		<section className="border">
		   <h1> Borrowed </h1>

			<div className="book-container">
			{ borrowed.map(book => <BookCard book={book} key={book.id} />) }
			</div>
		</section>
	)
}

export default BorrowList
