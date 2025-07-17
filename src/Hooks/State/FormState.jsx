import { useState } from "react";

function FormState() {
    const [radius, setRadius] = useState("");

    const area = () => {
        if (!radius) return "";
        return Math.PI * Math.pow(Number(radius), 2);
    }

    const getInputValue = (e) => {
        setRadius(e.target.value);
    }

    return (
        <div>
            <div>
                <p>
                    <label>Circle Value</label>
                </p>
                <p>
                    <input type="number" value={radius} onChange={getInputValue}/>
                </p>
            </div>
            <div>
                For a circle with radius <b>{radius}</b> the area is <b>{area()}</b>
            </div>
            {/* Add this line to render the circle */}
            <Circle radius={radius} />
      </div>  
    )
}

function Circle(props) {
    let { radius } = props;

    const getSize = (radius) => {
        let r = parseInt(radius);
        return (r * 2) + "px";
    }

    const getTextSize = (radius) => {
        let r = parseInt(radius);
        // Set a minimum font size for visibility
        return Math.max(12, r) + "px";
    }

    return (
      <div
        style={{
          width: getSize(radius),
          height: getSize(radius),
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.1)",
          border: "2px solid #333",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          margin: "20px auto"
        }}
      >
        <span style={{ fontSize: getTextSize(radius), color: "#333", fontWeight: "bold" }}>
          r={parseInt(radius)}
        </span>
      </div>
    );
}

export default FormState;