import React, { useEffect } from 'react'
import "./dashboard.css"
import Sidebar from './Sidebar'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Doughnut, Line } from "react-chartjs-2"
import Chart from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getAdminProducts } from '../../actions/productActions'
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);

const Dashboard = () => {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.adminProducts);



  useEffect(()=>{
    dispatch(getAdminProducts())
  },[dispatch])

  // let totalAmount = 0;
  // orders &&
  //   orders.forEach((item) => {
  //     totalAmount += item.totalPrice;
  //   });

  let outOfStock = 0;

  products &&
  products.forEach((item,index)=>{
    if(item.stock===0){
      outOfStock+=1;
    }
  })

  const lineState = {
    labels: ["Initial Amount" , "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        BackgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197,72,49)"],
        data: [0,4000],
      }
    ]
  }

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock,products.length - outOfStock],
      },
    ],
  };

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
          <Typography component="h1">Dashboard</Typography>

          <div className="dashboardSummary">
            <div>
              <p>
                Total Amount <br />  ₹4000
              </p>
            </div>
            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Product</p>
                <p>{products && products.length}</p>
              </Link>
              <Link to="/admin/orders">
                <p>Orders</p>
                {/* <p>3</p> */}
              </Link>
              <Link to="/admin/users">
                <p>Users</p>
                {/* <p>4</p> */}
              </Link>
            </div>
          </div>
          <div className="lineChart">
            <Line data={lineState} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard