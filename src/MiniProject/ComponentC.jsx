import ComponentD from "./ComponentD";
import ComponentE from "./ComponentE";

function ComponentC() {
    return (
        <div className="component-c-container">
        <ComponentD />
        <ComponentE />   
      </div>  
    )
}

export default ComponentC;