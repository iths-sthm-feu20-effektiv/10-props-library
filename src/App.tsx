import React from 'react';
import './App.css';

function App() {
    return (
        <main>
            <div className="border">
                <h1> Catalogue</h1>

            	<div className="book-container">
            		<div className="book-card">
            			<h2>Titel</h2>
            			<p> Författare </p>
            			<button> Låna mig! </button>
            		</div>

            	</div>

            </div>

            <div className="border">
    	       <h1> Borrowed </h1>

            	<div className="book-container">
            		<div className="book-card">
            			<h2>Titel</h2>
            			<p> Författare </p>
            			<button> Lämna tillbaka</button>
            		</div>
            	</div>
            </div>
        </main>
    );
}

export default App;
