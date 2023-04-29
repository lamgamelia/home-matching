import { AuthContext } from "../context/auth.js";
const { useContext, useState, useEffect } = React;
import graphQLFetch from '../graphql.js';
const Link = ReactRouterDOM.Link;

export function MyProfile () {
    const {user} = useContext(AuthContext);
    const myUsername = user.username;
    const [myProfileData, setMyProfileData] = useState({
        username: myUsername,
        propertyCondition: [],
        designStyle: [],
        propertyType: [],
    });

    useEffect(()=>console.log(myProfileData), [myProfileData])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMyProfileData({...myProfileData, [name]: value});
    };

    const handleChangePropCondition = (e) => {
        const valueArr = myProfileData.propertyCondition
        const name = e.target.name;
        const value = e.target.value;
        if (valueArr.includes(value)) {
            const index = valueArr.indexOf(value);
            valueArr.splice(index, 1);
        } else {valueArr.push(value)};
        setMyProfileData({...myProfileData, [name]: valueArr});
    };

    const handleChangePropType = (e) => {
        const valueArr = myProfileData.propertyType
        const name = e.target.name;
        const value = e.target.value;
        if (valueArr.includes(value)) {
            const index = valueArr.indexOf(value);
            valueArr.splice(index, 1);
        } else {valueArr.push(value)};
        setMyProfileData({...myProfileData, [name]: valueArr});
    };

    const handleChangeStyle = (e) => {
        const valueArr = myProfileData.designStyle
        const name = e.target.name;
        const value = e.target.value;
        if (valueArr.includes(value)) {
            const index = valueArr.indexOf(value);
            valueArr.splice(index, 1);
        } else {valueArr.push(value)};
        setMyProfileData({...myProfileData, [name]: valueArr});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = `mutation addDesigner ($designer: InputDesigner!){
            addDesigner (newDesigner: $designer) {
                id
                username
                title
                email
                mobile
                designStyle
                propertyCondition
                feeLevel
                propertyType
                description
            }
        }`
        const designer = {...myProfileData}
        const data = await graphQLFetch(query, {designer});
        if (!data) {
            console.log('profile not updated');
        } else {
            console.log('profile updated');
        }
    };

    return (
        <form style={{padding:"30px"}}>
        <h2> My Profile </h2>
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example3">Company name</label>
            <input name="title" type="text" id="form6Example3" className="form-control" onChange={handleChange} />            
        </div>

        <div className="row mb-4">
            <div className="col">
            <div className="form-outline">
                <label className="form-label" htmlFor="form6Example1">Email</label>
                <input name="email" type="text" id="form6Example1" className="form-control" onChange={handleChange} />
            </div>
            </div>
            <div className="col">
            <div className="form-outline">
                <label className="form-label" htmlFor="form6Example2">Mobile</label>
                <input name="mobile" type="text" id="form6Example2" className="form-control" onChange={handleChange} />               
            </div>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col">
            <div className="form-outline">
                <p className="form-label">Design Style</p>
                <input name="designStyle" value="Artistic" type="checkbox" id="Artistic" className="form-check-input" onChange={handleChangeStyle} />
                <label className="form-check-label" htmlFor="Artistic">Artistic</label>
                <br/>
                <input name="designStyle" value="Industrial" type="checkbox" id="Industrial" className="form-check-input" onChange={handleChangeStyle} />
                <label className="form-check-label" htmlFor="Industrial">Industrial</label>
                <br/>
                <input name="designStyle" value="Luxury" type="checkbox" id="Luxury" className="form-check-input" onChange={handleChangeStyle} />
                <label className="form-check-label" htmlFor="Luxury">Luxury</label>
                <br/>
                <input name="designStyle" value="Minimalist" type="checkbox" id="Minimalist" className="form-check-input" onChange={handleChangeStyle} />
                <label className="form-check-label" htmlFor="Minimalist">Minimalist</label>
                <br/>
                <input name="designStyle" value="Modern" type="checkbox" id="Modern" className="form-check-input" onChange={handleChangeStyle} />
                <label className="form-check-label" htmlFor="Modern">Modern</label>
                <br/>
                <input name="designStyle" value="Other" type="checkbox" id="Other" className="form-check-input" onChange={handleChangeStyle} />
                <label className="form-check-label" htmlFor="Other">Other</label>
                <br/>
            </div>
            </div>
            <div className="col">
            <div className="form-outline">
                <p className="form-label">Property Condition</p>
                <input name="propertyCondition" value="new" type="checkbox" id="form6Example2" className="form-check-input" onChange={handleChangePropCondition} />
                <label className="form-check-label" htmlFor="form6Example2">New</label>
                <br/>
                <input name="propertyCondition" value="resale" type="checkbox" id="form6Example2" className="form-check-input" onChange={handleChangePropCondition} />
                <label className="form-check-label" htmlFor="form6Example2">Resale</label>
            </div>
            </div>
            <div className="col">
            <div className="form-outline">
                <p className="form-label">Property Type</p>
                <input name="propertyType" value="HDB" type="checkbox" id="HDB" className="form-check-input" onChange={handleChangePropType} />
                <label className="form-check-label" htmlFor="HDB">HDB</label>
                <br/>
                <input name="propertyType" value="Condo" type="checkbox" id="Condo" className="form-check-input" onChange={handleChangePropType} />
                <label className="form-check-label" htmlFor="Condo">Condo</label>
                <br/>
                <input name="propertyType" value="Landed" type="checkbox" id="Landed" className="form-check-input" onChange={handleChangePropType} />
                <label className="form-check-label" htmlFor="Landed">Landed</label>
                <br/>
            </div>
            </div>
            <div className="col">
            <div className="form-outline">
                <label className="form-label" htmlFor="form6Example4">Fee Level</label>
                <select name="feeLevel" className="form-control" id="form6Example4" onChange={handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>                
            </div>
            </div>
        </div>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form6Example7">Description</label>
            <textarea name="description" className="form-control" id="form6Example7" rows="4" onChange={handleChange}></textarea> 
        </div>
        
        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Update Profile</button>
        <Link to="/imgUpload" className='mb-2' >Skip to upload images</Link>
        </form>
    )
}