import { AuthContext } from "../context/auth.js";
const { useContext, useState, useEffect } = React;
import graphQLFetch from '../graphql.js';

export function PostReview (props) {
    const [reviewData, setReviewData] = useState([]);
    const [designerData, setDesignerData] = useState([])
    const [selectedImage, setSelectedImage] = useState("");

    const {user} = useContext(AuthContext);

    useEffect(async () => {
        const query = `query{listDesigner{title}}`;
        const response = await graphQLFetch(query);
        const title = response.listDesigner.map(i => i.title);
        console.log("Response from GQL server:", title);
        setDesignerData(title);
    }, []);

    useEffect(() => console.log("state updated", designerData), [designerData]);

    function imgUpload() {
        
    }

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="home-design.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <div className="form-outline">
                        <select type="search" className="form-control" aria-label="FormControlSelect1">
                            <option defaultValue="">Select a designer</option>
                            {designerData.map(i => <option value={i}>{i}</option>)}
                        </select>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea3" rows="7" placeholder="Write your review"></textarea>
                    </div>
                    
                    <a href="#" className="btn btn-primary">Submit</a>
                    <a href="#" className="card-link float-right" onClick={imgUpload}>Upload image</a>
                </div>
            </div>
        </div>

    

    );
}