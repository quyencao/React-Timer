var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;

    console.log("input count", $('input').length);

    // start is number end in number middle is number
    if(strSeconds.match(/^[0-9]*$/)) {
      // Clear input
      this.refs.seconds.value = '';

      // Call a function in parent pass down to change state!!!
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
            <button type="submit" className="button expanded">Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
