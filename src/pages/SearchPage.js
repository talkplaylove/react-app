import React from 'react'
import { useLocation } from 'react-router-dom'

function SearchPage() {
  let query = useQuery()

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  return (
    <>
      {query.get('keyword')}
    </>
  )
}

export default SearchPage