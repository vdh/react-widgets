'use strict';
var React = require('react')
  , compat = require('./util/compat');

module.exports = React.createClass({

  displayName: 'MultiselectInput',

  propTypes: {
    value:        React.PropTypes.string,
    maxLength:    React.PropTypes.number,
    onChange:     React.PropTypes.func.isRequired,
    onFocus:      React.PropTypes.func,

    disabled:     React.PropTypes.bool,
    readOnly:     React.PropTypes.bool
  },

  componentDidUpdate: function() {
    React.findDOMNode(this)
      .setAttribute('aria-activedescendant', this.props['aria-activedescendant'])

    this.props.focused && this.focus()
  },

  render: function(){
      var value = this.props.value
        , placeholder = this.props.placeholder
        , size = Math.max((value || placeholder).length, 1) + 1;

      return (
        <input {...this.props}
          className='rw-input'
          autocomplete='off'
          aria-disabled={this.props.disabled}
          aria-readonly={this.props.readOnly}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          size={size}
        />
      )
  },

  focus: function(){
    compat.findDOMNode(this).focus()
  }

})
