type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className="grid w-full h-screen grid-cols-[100px_1fr] grid-rows-[50px_1fr]">
      {props.children}
    </div>
  )
}

export default Layout
