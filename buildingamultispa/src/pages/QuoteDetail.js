import React from 'react'
import { Route, useParams } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maximlian', text: 'Learning React is great!' },
]




function QuoteDetail() {

    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>no quote found!</p>;
    }

    return (
        <h1>
            {/* Quote Detail Page
            <p>{params.quoteId}</p> */}
            {/* Nested Routes */}
            {/* or  /quotes/:quotesId/comments */}

            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </h1>
    )
}

export default QuoteDetail
