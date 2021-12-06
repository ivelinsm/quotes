import React from "react";

class Quote extends React.Component {
  render() {
    return (<div>
      <div id="text"><i class="fas fa-quote-left"></i><span> </span>
        {this.props.quote}
      </div>
      <div id="author">
        <span>- </span>{this.props.author}
      </div>
      </div>
    );
  }
}

export default Quote;
