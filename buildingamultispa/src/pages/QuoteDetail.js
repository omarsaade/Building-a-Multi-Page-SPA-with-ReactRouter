import React from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments';

function QuoteDetail() {

    const params = useParams();

    return (
        <h1>
            Quote Detail Page
            <p>{params.quoteId}</p>
            {/* Nested Routes */}
            {/* or  /quotes/:quotesId/comments */}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </h1>
    )
}

export default QuoteDetail
