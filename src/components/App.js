import React from 'react'
import Button from './Button'
import Quote from './Quote'
import stands4API from '../api/stands4API'

let colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

let color = colors[Math.floor(Math.random() * colors.length)];

class App extends React.Component {
    state = { 
      quote: 'Loading...', 
      author: 'Loading...',
      color: color }

    changeTheme = () => {
        this.setState({color: color});
        document.documentElement.style.setProperty('--main-color', this.state.color);
      }

    getNewQuote= () => {
      stands4API.get('/quotes.php?uid=9667', {
        params: { 
          tokenid: 'QmJuR8utPx4jtInx',
          searchtype: 'RANDOM',
          format: 'json'
        }
      })
      .then(response => {
        this.setState({
          quote: response.data.result.quote,
          author: response.data.result.author
        });
      })
    }
  
    componentDidMount(){
      this.changeTheme();
      this.getNewQuote();
    }

    render(){
        return (
          <div className="wrapper">
              <div id="quote-box">
                <Quote quote={this.state.quote} author={this.state.author}/>
                <div className="buttons">
                  <a href={"https://twitter.com/intent/tweet?text="+this.state.quote} id="tweet-quote"><i class="fab fa-twitter fa-xs"></i></a> 
                  <Button text="New Quote" onClick={this.getNewQuote}/>
                </div>
                </div>
             </div>)
    }
}

/*
    getNewQuoteOld = () => {
      fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            let randomNum = Math.floor(Math.random() * 1150);
          console.log(data[randomNum]);
        });
    };
    */

export default App