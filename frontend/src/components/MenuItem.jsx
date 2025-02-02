import '../App.css';
import img from '../assets/greek-salad.jpg';
import { MdOutlineDeliveryDining } from "react-icons/md";
function MenuItem() {
    return (
        <div className="card rounded-3 position-relative">
            <div className="card-img ">
                <img src={img} alt="" className='w-100' />
            </div>
            <div className="card-body p-3">
                <h5 className="card-title">Greek Salad</h5>
                <span className='price fw-bold position-absolute'><span className='text-success'>$</span>9.00</span>
                <p className='my-3'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </div>
            <div className="card-footer p-3">
                <a href='/reservations' className='fw-bold text-dark'>Order a delivery <MdOutlineDeliveryDining /></a>
            </div>
        </div>
    );
}

export default MenuItem;