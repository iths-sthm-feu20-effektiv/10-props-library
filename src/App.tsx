import React, { useState } from 'react';
import './App.css';
import { Book } from './types/Book'
import Catalogue from './components/catalogue/Catalogue'
import BorrowList from './components/borrow/BorrowList'

function App() {
    const [borrowed, setBorrowed] = useState<Book[]>([])

    const liftBookBorrowed = (book: Book) => {
        let newList = [ ...borrowed, book ]
        setBorrowed(newList)
    }
    return (
        <main>
            <Catalogue liftBookBorrowed={liftBookBorrowed} />

            <BorrowList borrowed={borrowed} />
        </main>
    );
}

export default App;
