
import {URL} from "../Constants";


const ClothesCard = ({title,price,image,rating})=>{
    return(
        <div className="card">
            <img className="img-card" src={image}/>
            <h1 className="title">{title}</h1>
            <h2 className="price">Rs {price}</h2>
            <h3 className="rating">{rating.rate} Rating</h3>  
        </div>
    )
}
export default ClothesCard;