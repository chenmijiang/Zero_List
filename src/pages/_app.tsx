import SideBar from '@/components/SideBar'
import TopHeader from '@/components/TopHeader'
import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        {/* 顶部栏 */}
        <TopHeader className="col-span-2" />
        {/* 侧边栏 */}
        <SideBar className="" />
        {/* 主体组件 */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
