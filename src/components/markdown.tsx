import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
  className?: string
}

const Markdown = (props: Props) => {
  return <ReactMarkdown className={props.className}>{props.content}</ReactMarkdown>
}

export default Markdown
