import { useState } from 'react'
import useNews from 'utils/news/useNews'
import testData from 'utils/news/testData'
import NewsCo from 'components/News'

function App() {
  const [keyword, setKeyword] = useState<string>('')
  const [sendData, setSendData] = useState<string>('')
  const newNews = useNews(sendData, process.env.REACT_APP_API_KEY || '')
  // const newNews = testData
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSendData(keyword)
  }
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Keyword"
          autoComplete="off"
          autoFocus
          required
          minLength={2}
          maxLength={20}
          className="m-5 rounded-sm border-2 border-sky-300 p-2 text-center shadow-lg hover:shadow-xl"
        />
        <button
          type="submit"
          className="w-1/2 self-center rounded-md border-2 border-sky-300 p-2 shadow-lg hover:shadow-2xl"
        >
          Szukaj
        </button>
      </form>
      <div className="mt-4 flex flex-col items-center justify-end">
        {newNews
          ? newNews.map((news, index) => <NewsCo news={news} key={index} />)
          : null}
      </div>
    </div>
  )
}

export default App
