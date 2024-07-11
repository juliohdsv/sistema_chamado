import { BrowserRouter } from 'react-router-dom'

import "./assets/css/index.css";
import RoutesApp from "./routes/main.routes";

export default function App() {

  return (
      <BrowserRouter>
          <RoutesApp/>
      </BrowserRouter>
  )
}

