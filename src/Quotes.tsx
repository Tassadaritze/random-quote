import React, { ReactElement } from "react";
import "./Quotes.css";

const quoteList = [
    {
        quote: "The less you eat, drink and read books; the less you go to the theatre, the dance hall, the public house; the less you think, love, theorize, sing, paint, fence, etc., the more you save-the greater becomes your treasure which neither moths nor dust will devour-your capital. The less you are, the more you have; the less you express your own life, the greater is your alienated life-the greater is the store of your estranged being.",
        author: "Karl Marx and Friedrich Engels"
    },
    {
        quote: "Hegel remarks somewhere that all great, world-historical facts and personages occur, as it were, twice. He has forgotten to add: the first time as tragedy, the second as farce.",
        author: "Karl Marx"
    },
    {
        quote: "There are decades where nothing happens; and there are weeks where decades happen.",
        author: "Vladimir Lenin"
    },
    {
        quote: "IF YOU SMEEEEEEEEEEEELLLLLLLLLLLLL WHAT THE ROOOOOOOOOOOOOOOCK IS COOOOOOOOOOOOOOKING",
        author: "Dwayne \"The Rock\" Johnson"
    },
    {
        quote: "hey can someone tell me who is the name of the video where bely herrington is cussing someone in the office?",
        author: "fjghtutgz"
    }
];

type quoteState = {
    quote: string
    author: string
};

class Quotes extends React.Component<Record<string, never>, quoteState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            quote: "",
            author: ""
        }
        this.generateQuote = this.generateQuote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    generateQuote(): void {
        const randomQuoteIndex = Math.round(Math.random() * (quoteList.length - 1));
        this.setState({
            quote: quoteList[randomQuoteIndex].quote,
            author: quoteList[randomQuoteIndex].author
        });
    }

    componentDidMount(): void {
        this.generateQuote();
    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        this.generateQuote();
    }

    render(): ReactElement {
        return(
            <div id="quote-box">
                <p id="text">{this.state.quote}</p>
                <p id="author">- {this.state.author}</p>
                <div id="quote-actions">
                    <button id="new-quote" onClick={this.handleClick}>New Quote</button>
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quote} -${this.state.author}`}
                    className="twitter-hashtag-button" target="_blank" rel="noopener noreferrer">Tweet Quote</a>
                </div>
            </div>
        )
    }
}

export default Quotes;