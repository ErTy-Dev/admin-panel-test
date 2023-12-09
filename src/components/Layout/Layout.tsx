import { FC, PropsWithChildren } from "react"
import Sidebar from "../Sidebar/Sidebar"
import cls from './Layout.module.css'

const Layout:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={cls.wrapper}>
      <Sidebar/>
      <div className={cls.container}>
        {children}
      </div>
    </div>
  )
}

export default Layout