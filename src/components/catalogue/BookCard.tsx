import { Book } from '../../types/Book'

interface BookCardProps {
	book: Book,
	borrowBook: (borrowedBook: Book) => void
}

const BookCard = ({ book, borrowBook }: BookCardProps) => (
	<div className="book-card">
		<h2> {book.title} </h2>
		<p> {book.author} </p>
		<button onClick={() => borrowBook(book)}> Låna mig! </button>
	</div>
)

export default BookCard
