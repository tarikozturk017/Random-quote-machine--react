import React, {useState} from "react"
import {quotes} from "../quotesData"
import { Link } from 'react-router-dom';

const QuoteBox = (props) => {
    // console.log(quotes)
    
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])

    function newQuote() {
        const len = quotes.length
        const randomNum = Math.floor(Math.random() * len);
        setQuote(quotes[randomNum]);
    }

    return (
        <div id={"quote-box"} className={"align-middle"}>
            <p id={"text"}><i class="fa fa-quote-left"> </i> {quote.quote}</p>
            <p id={"author"}>- {quote.author}</p>
            <div className="button--container">
                <a href={"http://twitter.com/intent/tweet"} id={"tweet-quote"}><i class="fa fa-twitter"></i></a>
                <button id={"new-quote"} onClick={() => newQuote()}>New quote</button>
            </div>
        </div>
    )
}

export default QuoteBox;
