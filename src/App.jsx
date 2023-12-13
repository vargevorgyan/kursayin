import { useEffect, useState } from 'react'
import './App.css'
import Animation from './Animation'
import Login from './Login'
import Content from './Content'
import Exit from './Exit'

function App() {
  const [page, setPage] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setPage(1)
    }, 20000)
  }, [])

  return (
    <>
      {page === 0 && <Animation />}
      {page === 1 && <Login setPage={setPage} />}
      {page === 2 && <Content setPage={setPage} />}
      {page === 3 && <Exit setPage={setPage} />}
    </>
  )
}

export default App
