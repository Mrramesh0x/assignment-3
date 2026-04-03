import { BuilderProvider } from "./context/builderContext"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <BuilderProvider>
        <Home/>
      </BuilderProvider>
    </div>
  )
}

export default App