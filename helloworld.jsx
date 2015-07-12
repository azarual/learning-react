var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      text: “”,
      photoAdded: false
    }
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
    },
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  },
  remainingChars: function() {
    return 140 - this.state.text.length;
  },
  render: function() {
    return (
     <div>{this.state.text}</div>
     <input className=“message” onchange=“this.handleChange” />
      <div>{this.remainingChars()}</div>
    );
  }
});

React.render(<HelloWorld />, document.body);
