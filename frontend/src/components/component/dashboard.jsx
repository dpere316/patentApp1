import React, { Component } from 'react';
import Header from './admin/Header';
import Chart from './admin/Chart'

class dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Chart/>
            </div>
        );
    }
}

export default dashboard;