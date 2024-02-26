

function HornedBeast(props) {

    return (
        <>
            <h2> {props.title} </h2>
            <img src={props.imageUrl} alt="" />
            <p> {props.description} </p>
        </>
    )
}

export default HornedBeast;