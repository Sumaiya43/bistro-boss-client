import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)

            Swal.fire({
                title: 'User Login Successfull!!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })

    }
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex-row flex-col">
                <div className="text-center lg:text-left  md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card  max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <LoadCanvasTemplate/>
                            </label>
                            <input type="text" placeholder="type the above text" name='capcha' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Submit' />
                        </div>
                        <div className="form-control mt-6">
                            <p>New to website? Please <Link to='/register'>Register here</Link></p>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;