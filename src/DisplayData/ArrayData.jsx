const FavoriteColors = ['red', 'green', 'blue', 'yellow'];

function ArrayData() {
    return (
        <div>
            <h1>Favorite Colors</h1>
            <ul>
                {FavoriteColors.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayData;
