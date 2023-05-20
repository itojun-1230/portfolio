//component
import { RouterConfig } from "./Router"
import { Header } from "./component/Header/Index"
import { MainContents } from "./component/MainContents"

export const App = () => {

  return (
    <>
      <Header />
      <MainContents>
        <RouterConfig />
      </MainContents>
    </>
  )
}