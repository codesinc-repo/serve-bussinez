import React from "react";
import { Link } from 'react-router-dom';
import updateimg from "../../images/update image 1.png"


const OrderImage = () => {
    return (
        <>
            <div className='d-flex container flex-column align-items-center justify-content-center'>
                <img src={updateimg} style={{ width: "80%" }} alt="" />
                <div className='set_button_position'>
                    <Link to="/Home" >  <button className='btn btn-light border rounded-5 mt-3 mb-3 mx-auto'>Order Now</button></Link>
                </div>
            </div>
        </>
    );

}
export default OrderImage;