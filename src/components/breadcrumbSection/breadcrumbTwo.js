import React, { Component } from 'react';

class breadcrumbTwo extends Component {
    render() {
        return (
            <section className="section breadcrumb-area overlay-dark d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Breamcrumb Content */}
                            <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
                                <h3 className="text-white">{this.props.heading}</h3>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">{this.props.home}</a></li>
                                    <li className="breadcrumb-item"><a href="/">{this.props.page}</a></li>
                                    <li className="breadcrumb-item active">{this.props.title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default breadcrumbTwo;