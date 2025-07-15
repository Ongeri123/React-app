function Myform() {
    const getNameValue = (e) => {
        // console.log(e);
        console.log(e.target.value)
    };

    const getEmailValue = (e) => {
        // console.log(e);
        console.log(e.target.value)
    }
    return (
        <div>
            <div>
                <p>
                    <label>Name</label>
                </p>
                <p>
                    <input onChange ={getNameValue} type="text"/>
                </p>
            </div> 
            <div>
                <p>
                    <label>Email</label>
                </p>
                <p>
                    <input onBlur={getEmailValue }type="email"/>
                </p>

            </div>
        </div>
    )
}

export default Myform;