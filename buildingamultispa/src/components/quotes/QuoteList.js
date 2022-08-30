import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


//sorting functionallity
const sortQuotes = (quotes, ascending) => {

  return quotes.sort(function compare(quoteA, quoteB) {
    //     console.log(quoteA.id);
    // console.log(quoteB.id);
    if (ascending) {
      // console.log(ascending); true
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


/* If compare(a, b) is less than zero, the sort() method sorts 
a to a lower index 
than b.In other words, a will come first.
If compare(a, b) is greater than zero, the sort() method 
sort b to a lower index than a, i.e., b will come first. */


const QuoteList = (props) => {
  // console.log("1");
  const history = useHistory();
  console.log(history);

  const location = useLocation();
  // console.log(location);
  // { pathname: '/quotes', search: '?sort=asc', hash: '', state: undefined, key: 'wa51e2' }

  //to save the current sorting
  const queryParams = new URLSearchParams(location.search);
  // console.log(location.search);         ?sort = desc

  const isSortingAscending = queryParams.get('sort') === 'asc';
  // get('sort') btraje3 el value taba3 el key
  console.log(isSortingAscending); //false

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  // console.log(props.quotes); (2)[{…}, {…}]
  // console.log(isSortingAscending); false
  // console.log(sortedQuotes);    (2) [{…}, {…}]

  // console.log(props.quotes);
  //query parameter is added
  const changeSortingHandler = () => {
    //So, that means that pushing this page here actually rerenders this component.
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };

  //default desc



  return (
    <Fragment>

      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>

      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
