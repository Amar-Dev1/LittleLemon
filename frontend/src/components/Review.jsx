import '../App.css';
import { FaUserCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
const review = ({person, reviewsCount, reviewFeedback}) => {
    return (
        <div className='review-card p-3 bg-light text-center d-flex flex-column jsutify-content-around'>
            <div className="starts d-flex justify-content-center">
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
            </div>
            <div className="user d-flex my-2 justify-content-center position-relative">
                <div><FaUserCircle className='user-icon fs-2' /></div>
                <div>
                    <h4 className='fs-5 mx-1'>{person}</h4>
                    <small style={{ color: 'red' }} className='position-absolute'>{reviewsCount} reviews</small>
                </div>
            </div>
            <div className="text my-3">
                <p className='text-muted'>{reviewFeedback}</p>
            </div>
        </div>
    )
}

export default review;