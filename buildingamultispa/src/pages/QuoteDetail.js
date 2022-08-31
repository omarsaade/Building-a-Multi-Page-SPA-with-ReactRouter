import React from 'react'
import { Link, Route, useParams, useRouteMatch, useLocation } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maximlian', text: 'Learning React is great!' },
]




function QuoteDetail() {


    const match = useRouteMatch();
    const params = useParams();

    // console.log(params);// { quoteId: 'q1' }
    console.log(match); // { path: '/quotes/:quoteId', url: '/quotes/q2', isExact: true, params: {… } }
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>no quote found!</p>;
    }

    return (
        <h1>

            <HighlightedQuote text={quote.text} author={quote.author} />
            {/* <Route path={`/quotes/${params.quoteId}`} exact> */}

            <Route path={match.path} exact>
                <div className='centered'>
                    {/* <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat'> */}
                    <Link to={`${match.url}/comments`} className='btn--flat'>
                        Load Comments</Link>
                </div>
            </Route>

            {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </h1>
    )
}

export default QuoteDetail
