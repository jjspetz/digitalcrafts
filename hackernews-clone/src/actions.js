
export function set_top500(articles) {
  return {
    type: 'SET_top500',
    articles: articles
  }
}

export function nextPage(pageStart, pageEnd) {
  return {
    type: 'CHANGE_PAGE',
    pageStart: pageStart,
    pageEnd: pageEnd
  }
}

export function apiUpdate(data) {
  return {
    type: 'API_UPDATE',
    data: data
  }
}
