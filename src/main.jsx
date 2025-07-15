import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TestComponent from "./TestComponent.jsx"
// import Trial from "./Trial.jsx"
// import Trade from "./Trade.jsx"
// import { SweetTooth1, SweetTooth2, SweetTooth3 } from  "./NamedFunction.jsx"
// import { Combined1, Combined2 } from './CombinedExport.jsx'
// import { Combined1, Combined2} from "./CombinedExport.jsx"
// import Main1 from "./CombinedExport.jsx"
// import AllData from "./DisplayData/AllData.jsx"
// import ObjData from './DisplayData/ObjData.jsx'
// import ArrayData from './DisplayData/ArrayData.jsx'

// import Student from "./Student.jsx"
// import ComponentA from './MiniProject/index.jsx'
// import "./style.css"
// import Buttons from './Events/Btns.jsx'
import Myform from './Events/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Myform/>
  </StrictMode>,
)

