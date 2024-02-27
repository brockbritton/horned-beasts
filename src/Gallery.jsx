
import HornedBeast from "./HornedBeast";
import beastData from "./assets/data.json"

function Gallery() {

    return (
        <>
        {beastData.map(obj => {
            return <HornedBeast key={obj._id} title={obj.title} description={obj.description} imageUrl={obj.image_url} />
        })}
    
        </>
    );
}

export default Gallery