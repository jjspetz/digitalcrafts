import React, {Components} from 'react';
import {connect} from 'react-redux';

var initialState = {};

export function articles (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'CHANGE_PAGE':
      return Object.assign(
        {},
        state,
        {[action.id]: action.data}
      );
    case 'API_UPDATE':
      return Object.assign(
        {},
        state,
        {[action.id]: action.data}
      );
    default:
      return state;
  }
}
