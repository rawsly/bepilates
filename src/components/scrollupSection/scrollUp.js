import React, { Component } from 'react';

const initData = {
    iconClass: "icofont-bubble-up"
}

class scrollUp extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <div id="scrollUp" title="Scroll To Top">
                <i className={this.state.initData.iconClass} />
            </div>
        );
    }
}

export default scrollUp;