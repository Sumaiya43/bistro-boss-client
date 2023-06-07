import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const [, refetch] = useCart()

    const handleAddtoCart = item => {
        console.log(item);
        if (user && user.email) {
            const orderItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to order your food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute right-0 mt-4 px-2'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions justify-end">
                        <Link > <button onClick={() => handleAddtoCart(item)} className='btn btn-outline bg-slate-100 border-0 border-b-4 text-orange-500 mt-4'>Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;