import { useState, useEffect } from 'react'
import axios from 'axios'
import { News } from '../../types/types'

function useNews(keyword: string, apikey: string) {
  const [newsData, setNewsData] = useState<News[]>()
  useEffect(() => {
    if (!keyword) return
    axios
      .get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apikey}`)
      .then((res) => {
        setNewsData(res.data.articles)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [keyword, apikey])
  return newsData
}

export default useNews
