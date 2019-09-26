import React, { useState } from 'react'
import useDataApi from './useApi'
import Loading from './components/Loading'

function App() {
  const [query, setQuery] = useState('redux')
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://hn.algolia.com/api/v1/search?query=redux`
  )

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <div>Ooops...</div>
  }

  return (
    <>
      <form
        onSubmit={event => {
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
          event.preventDefault()
        }}
        className="form-inline"
      >
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </form>
      <ul className="list-group">
        {data &&
          data.hits.map(item => (
            <li key={item.objectID} className="list-group-item">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
      </ul>
    </>
  )
}
export default App
