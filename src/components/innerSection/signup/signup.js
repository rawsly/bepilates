import React, { Component } from 'react';

const initData = {
    loginText: "Login",
    signupText: "Sign Up",
    forgotText: "Forgot Password?",
    rememberText: "Remember Me",
    text_1: "with your social network",
    text_2: "By clicking, you are continue to receive newsletters & promotions from Appo"
}

const imgData = [
    {
        image: "/img/login_1.svg"
    },
    {
        image: "/img/login_2.svg"
    },
    {
        image: "/img/login_3.svg"
    }
]

const socialData = [
    {
        linkClass: "facebook",
        iconClass: "fab fa-facebook-f"
    },
    {
        linkClass: "twitter",
        iconClass: "fab fa-twitter"
    },
    {
        linkClass: "google-plus",
        iconClass: "fab fa-google-plus-g"
    }
]

class signup extends Component {
    state = {
        initData: {},
        data: [],
        socialData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: imgData,
            socialData: socialData
        })
    }
    render() {
        return (
            <section className="section login-area signup-area h-100vh py-4">
                <div className="container h-100">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-12 col-sm-10 col-md-6 col-lg-6 mx-auto d-none d-md-block">
                            <div className="login-slider owl-carousel">
                                {this.state.data.map((item, idx) => {
                                    return(
                                        <img key={`ld_${idx}`} src={item.image} alt="" />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            {/* Appo Modal */}
                            <div className="appo-modal py-4 p-lg-4">
                                {/* Modal Content */}
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header p-0 border-0">
                                        <ul className="nav nav-pills" id="pills-tab">
                                            <li className="nav-item">
                                                <a className="nav-link" id="login-tab" data-toggle="pill" href="#login">{this.state.initData.loginText}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" id="signup-tab" data-toggle="pill" href="#signup">{this.state.initData.signupText}</a>
                                            </li>
                                        </ul>
                                        <button type="button" className="close m-0" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    {/* Modal Body */}
                                    <div className="modal-body">
                                        <div className="tab-content" id="pills-tabContent">
                                            {/* Login Form */}
                                            <div className="tab-pane fade" id="login">
                                                <form action="#" className="login-form">
                                                    {/* Social Login */}
                                                    <div className="social-login text-center">
                                                        <h5 className="fw-4 mt-2 mb-3">{this.state.initData.text_1}</h5>
                                                        {/* Social Icons */}
                                                        <div className="social-icons d-flex justify-content-center">
                                                            {this.state.socialData.map((item, idx) => {
                                                                return(
                                                                    <a key={`sdo_${idx}`} className={item.linkClass} href="#">
                                                                        <i className={item.iconClass} />
                                                                        <i className={item.iconClass} />
                                                                    </a>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    {/* Profile Login */}
                                                    <div className="profile-login mb-2 p-4">
                                                        <span className="bg-white p-2">or</span>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1"><i className="fas fa-user" /></span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder="Username or Email" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon2"><i className="fas fa-unlock-alt" /></span>
                                                        </div>
                                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                                                    </div>
                                                    <div className="custom-control custom-checkbox d-flex my-4">
                                                        <div className="remember">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label" htmlFor="customCheck1">{this.state.initData.rememberText}</label>
                                                        </div>
                                                        <div className="forgot-password ml-auto">
                                                            <span><a href="#">{this.state.initData.forgotText}</a></span>
                                                        </div>
                                                    </div>
                                                    {/* Login Button */}
                                                    <a href="#" className="btn btn-bordered d-block">{this.state.initData.loginText}</a>
                                                </form>
                                            </div>
                                            {/* Signup Form */}
                                            <div className="tab-pane fade show active" id="signup">
                                                <form action="#" className="login-form signup-form">
                                                    {/* Social Login */}
                                                    <div className="social-login text-center">
                                                        <h5 className="fw-4 mt-2 mb-3">{this.state.initData.text_1}</h5>
                                                        {/* Social Icons */}
                                                        <div className="social-icons d-flex justify-content-center">
                                                            {this.state.socialData.map((item, idx) => {
                                                                return(
                                                                    <a key={`sdo_${idx}`} className={item.linkClass} href="#">
                                                                        <i className={item.iconClass} />
                                                                        <i className={item.iconClass} />
                                                                    </a>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    {/* Profile Login */}
                                                    <div className="profile-login mb-2 p-4">
                                                        <span className="bg-white p-2">or</span>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon3"><i className="fas fa-user" /></span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon3" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon4"><i className="fas fa-envelope" /></span>
                                                        </div>
                                                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon4" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon5"><i className="fas fa-unlock-alt" /></span>
                                                        </div>
                                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon5" />
                                                    </div>
                                                    <div className="custom-control custom-checkbox my-4">
                                                        <div className="remember">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                            <label className="custom-control-label" htmlFor="customCheck2">{this.state.initData.text_2}</label>
                                                        </div>
                                                    </div>
                                                    {/* Signup Button */}
                                                    <a href="#" className="btn btn-bordered d-block">{this.state.initData.signupText}</a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default signup;