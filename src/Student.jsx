
function Student(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>isStudent: { props.IsStudent ? 'Yes': 'No'}</p>
        </div>
    )
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student