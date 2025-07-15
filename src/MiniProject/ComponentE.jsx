function ComponentE() {
    return (
        <div className="border-container">
            <div className="txt-container">
                <Card text1="254" text2="Some text" />
            </div>
            <div className="txt-container">
                <Card text1="254" text2="Some text" />
            </div>    
        </div>
    )
}

function Card(props) {
    const { text1, text2 } = props;
    return (
        <div>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    )
}

export default ComponentE;