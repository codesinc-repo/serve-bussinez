import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from "../../../Components/AdminHeader";
import { Footer } from "../../../Components/Footer";
import { Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import "./dashboard.css"
const Dashboard = () => {
    const pieData = {
        labels: ['Earnings', 'Pending Orders', 'Completed Orders'],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: ['#2e6d66', '#2a56da', '#1d232f'],
            hoverBackgroundColor: ['#1d232f', '#2a56da', '#cc65fe']
        }]
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Earnings',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#ff6384',
                borderColor: '#ff6384',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#ff6384',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#ff6384',
                pointHoverBorderColor: '#ff6384',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    return (
        <>
            <AdminHeader />
            <main>
                <div className="container my-5 dashboard_main">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card dashboard_card ">
                                <div className="card-body text-center">
                                    <i className="fas fa-shopping-cart fa-2x text-primary mb-3"></i>
                                    <h5 className="card-title">Orders</h5>
                                    <p className="card-text">150</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card dashboard_card">
                                <div className="card-body text-center">
                                    <i className="fas fa-dollar-sign fa-2x text-success mb-3"></i>
                                    <h5 className="card-title">Earnings</h5>
                                    <p className="card-text">$5,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card dashboard_card">
                                <div className="card-body text-center">
                                    <i className="fas fa-users fa-2x text-info mb-3"></i>
                                    <h5 className="card-title">Users</h5>
                                    <p className="card-text">300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card dashboard_card">
                                <div className="card-body text-center">
                                    <i className="fas fa-shopping-cart fa-2x text-danger mb-3"></i>
                                    <h5 className="card-title">Pending Order</h5>
                                    <p className="card-text">30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Earnings Over Time</h5>
                                    <Line data={lineData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Earnings Distribution</h5>
                                    <Pie data={pieData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Dashboard;
