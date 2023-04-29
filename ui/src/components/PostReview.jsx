import { AuthContext } from "../context/auth.js";
const { useContext, useState, useEffect } = React;
import graphQLFetch from '../graphql.js';

function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {reject(error)};
    })
}

export function PostReview (props) {
    const {user} = useContext(AuthContext);
    const reviewerName = user.username;
    const reviewerEmail = user.email;
    const [reviewData, setReviewData] = useState({name: reviewerName, email: reviewerEmail});
    const [designerData, setDesignerData] = useState([])

    useEffect(async () => {
        const query = `query{listDesigner{title}}`;
        const response = await graphQLFetch(query);
        const title = response.listDesigner.map(i => i.title);
        console.log("Response from GQL server:", title);
        setDesignerData(title);
    }, []);

    useEffect(() => console.log("state updated", reviewData), [reviewData]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name=="rating") {const value = Number(e.target.value)};
        setReviewData({...reviewData, [name]: value});
      };

    const selectImage = async (e) => {
        const selectedFile = e.target.files[0];
        const codedBase = await convertToBase64(selectedFile);
        setReviewData({...reviewData, reviewImage: codedBase})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = `mutation addReview ($review: InputReview!){
            addReview (newReview: $review) {
                id
                name
                email
                designer
                rating
                reviewMessage
                reviewImage
                datetime
            }
        }`
        const review = { ...reviewData }
        const data = await graphQLFetch(query, {review});
        if (!data) {
            console.log('review not submitted');
        } else {
            console.log('review submitted');
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={reviewData.reviewImage || "img_placeholder.png"} alt="Card image cap"/>
                <div className="card-body">
                    <div className="form-outline">
                        <select name="designer" className="form-control" onChange={handleChange} aria-label="FormControlSelect1">
                            <option defaultValue="">Select a designer</option>
                            {designerData.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <select name="rating" className="form-control" onChange={handleChange} aria-label="FormControlSelect2">
                            <option defaultValue="">Select a rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <p></p>
                        <textarea name="reviewMessage" className="form-control" onChange={handleChange} id="exampleFormControlTextarea3" rows="7" placeholder="Write your review"></textarea>
                    </div>
                    
                    <label>
                        Upload image
                        <input
                            type="file"
                            name="images"
                            onChange={selectImage}
                            accept="image/png , image/jpeg, image/webp"
                        />
                    </label>
                    <a className="btn btn-primary" onClick={handleSubmit}>Submit</a>
                </div>
            </div>
        </div>

    

    );
}