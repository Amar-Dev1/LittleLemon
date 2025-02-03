import '../App.css';
import { MdOutlineDeliveryDining } from "react-icons/md";
function MenuItem({ menuImg, menuTitle, menuDes, menuPrice }) {
    return (
        <div className="card rounded-3 position-relative">
            <div className="card-img ">
                <img src={menuImg} alt="" className='w-100' />
            </div>
            <div className="card-body p-3">
                <h5 className="card-title">{menuTitle}</h5>
                <span className='price fw-bold position-absolute'><span className='text-success'>$</span>{menuPrice}</span>
                <p className='my-3'>{menuDes}</p>
            </div>
            <div className="card-footer p-3">
                <a href='/reservations' className='fw-bold text-dark'>Order a delivery <MdOutlineDeliveryDining /></a>
            </div>
        </div>
    );
}

export default MenuItem;