import { News } from '../types/types'

export interface NewsProps {
  news: News
}

function NewsCo(props: NewsProps) {
  return (
    <a
      href={props.news.url}
      className="m-5 w-3/4 rounded-sm border-2 border-sky-300 bg-white p-5 text-center shadow-lg transition duration-150 ease-in-out hover:shadow-xl"
    >
      <h1 className="underline">{props.news.title}</h1>
      <h4>{props.news.description}</h4>
    </a>
  )
}

export default NewsCo
