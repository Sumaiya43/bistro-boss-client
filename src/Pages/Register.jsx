import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const {user, createUser} = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })


    }
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex-row flex-col">
                <div className="text-center lg:text-left  md:w-1/2">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card  max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            
                        </div>
                      
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Submit' />
                        </div>
                        <div className="form-control mt-6">
                         <p>Already Have an Account? Please <Link to='/login'>Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;