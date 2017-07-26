import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class Articles extends Component {
  render() {
    return (
      <ol>
        {this.props.top500.map((obj) =>
          <li key={obj.id}>
            <a className='titlelink' href={obj.url}>{obj.title}</a>
            <span className='nottitle'> ({obj.host})</span>
            <p className='nottitle'>
              {obj.score} points by {obj.by} {obj.time} hours ago | hide | {obj.descendants} comments
            </p>
          </li>
        )}
      </ol>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    top500: state.top500
  };
}

export default connect(mapStateToProps)(Articles);

// export default Articles;
