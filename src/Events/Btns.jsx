function Buttons() {
    const printDate = () => { 
        const date = new Date();
        console.log(date);
    };
    const clicked = () => { 
        console.log('Button clicked')
    };
    const alertMe = () => { };
    return (
        <div>
            <p>
                <button onClick ={clicked}>Click Me</button>
            </p>
            <p>
                <button onClick={printDate}>Print Date</button>
            </p>
            <p>
                <button>Alert Date</button>
            </p>
        </div>
    )
}

export default Buttons;