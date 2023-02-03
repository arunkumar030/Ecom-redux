import React from 'react';

export const Login = () => {
    return (
        <>
            <div class="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="   Enter your Email" />
            </div>
            <div>
                <label class="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
            </div><br/>
            <button type="button" className="btn btn-primary ">Submit</button>
        </>
    )
};
