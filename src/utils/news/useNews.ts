import { useState, useEffect } from 'react'
import axios from 'axios'
import { News } from '../../types/types'
import { testData } from './testData'

function useNews(keyword: string) {
  const [newsData, setNewsData] = useState<News[]>()
  const apiKey = import.meta.env.VITE_API_KEY
  useEffect(() => {
    if (!keyword) return
    if (!apiKey) {
      setNewsData(testData)
      console.log('API_KEY is not set')
      return
    }
    console.log(import.meta.env.VITE_API_KEY)
    axios
      .get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`)
      .then((res) => {
        setNewsData(res.data.articles)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [keyword])
  return newsData
}

export default useNews
