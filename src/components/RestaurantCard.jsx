import React from 'react'

export const RestaurantCard = (props) => {
    console.log(props)
  return (
    <div>
        <div className="resCard">
        <img className="resImage" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/2c1ec210-3ff8-4efa-bfad-cd3ab49bdc40_767777.jpg"
            alt=""
        />

        <h4>{props.name}</h4>
        <h6>{props.rating}</h6>
        <div>Desserts, Pastry</div>
        <h5>Janakpuri</h5>
        </div>
    </div>
  )
}
