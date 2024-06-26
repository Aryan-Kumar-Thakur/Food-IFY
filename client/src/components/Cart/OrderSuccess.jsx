import React from 'react'
import "./orderSuccess.css"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderSuccess = () => {
  return (
    <>
    <div className="orderSuccess">
        <Typography>Your Order has been Places successfully</Typography>
        <Link to="/orders">View Orders</Link>
    </div>
    </>
  )
}

export default OrderSuccess