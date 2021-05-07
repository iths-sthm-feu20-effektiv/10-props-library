import { Book } from '../../types/Book'

interface BookCardProps {
	book: Book
}

const BookCard = ({ book: { title, author} }: BookCardProps) => (
	<div className="book-card">
		<h2> {title} </h2>
		<p> {author} </p>
		<button> Återlämna </button>
	</div>
)

export default BookCard
