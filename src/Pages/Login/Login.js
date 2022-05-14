import React from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }


    if (gUser || user) {
        console.log(gUser || user);
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.Password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="your email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="Password" placeholder="your Password" class="input input-bordered w-full max-w-xs"
                                {...register("Password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.Password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                                {errors.Password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Password?.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs ' type="submit" value="Login" />
                    </form>

                    <p><small>New to Doctors portal  <Link className='text-primary' to="/signup">Create new account</Link></small></p>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary">Continue With Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;