// ANGULAR-> LIFE CYCLE HOOK

import { useEffect, useState } from "react";

import chickenimg from "/src/Hooks/Effects/funny.jpg";

function SimpleEffect() {
  // useEffect(function,[dependency])
  // useEffect(function)-> without dependency
  // useEffect(function,[])-> it will run only once
  // useEffect(function,[radius])-> initially when component is mounte and when radius

  const [n, setN] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [chickens, setChickens] = useState([]);
  
    useEffect(() => {
        console.log('useeffect has run');
        let K = n / 5;
        K = Math.floor(K);
        let chickenArry = [];
        for (let i = 0; i < K; i++) {
            chickenArry.push(i + 1);
        }
        console.log("Chicken Array", chickenArry);
        setChickens(chickenArry);
        // This will update the chickens state with the new array of chickens
        // You may want to do something with chickenArry here, e.g. set state
    }, [ n]);
  const getStatus = () => {
    if (showForm === true) {
      return "Hide Form";
    }
    return "Show Form";
  };

  // Whenever state change occurs
  // It triggures a rerender of the component
  // if the useEffect does not have dependency it will rerender

  //   useEffect(() => {
  //     console.log("useEffect has run");
  //   });

  // Using use Effect with empty dependency
  // Empty dependcy useEffect only once Intital render Only

  useEffect(() => {
    console.log("useEffect has run");
  }, []);

  return (
    <div>
      <h1>Simple Effect</h1>
      <div>
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </div>

      <div>
        {chickens.map((chicken, index) => {
          return (
            <img
              src={chickenimg}
              key={index}
              style={{
                width: "50px",
                margin: "10px",
              }}
            />
          );
        })}
      </div>

      <button onClick={() => setShowForm(!showForm)}>{getStatus()}</button>
      <MyForm showForm={showForm} />
    </div>
  );
}

function MyForm(props) {
  const { showForm } = props;

  if (showForm === false) {
    return null;
  }

  return (
    <div>
      <UnMountComponent />
    </div>
  );
}

function UnMountComponent() {
  let k = 1;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log("Mouse position");
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Show Form has been Mounted");

    //kill intrval ->
    let inteval = setInterval(() => {
      console.log("K is", k);
      k = k + 1;
    }, 1000);

    //Clean UP Function<Clean up any memory main thread>
    return () => {
      console.log("Component Unmounted");
      clearInterval(inteval);
    };
  }, []);

  return (
    <div>
      <h1>Unmount Component</h1>
      <div>
        <p>X Axios {position.x}</p>
        <p>Y Axios {position.y}</p>
      </div>
    </div>
  );
}

export default SimpleEffect;
