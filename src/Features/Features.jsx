import React from 'react'
import './Features.css'
import { IoIosStar } from "react-icons/io";
import { GiTigerHead } from "react-icons/gi";

const Features = (props) => {

    return (
        <div>
            <div class="item-container">
                <div class="item-top">
                    <div class="top-left-logo">
                        <GiTigerHead />
                    </div>
                    <div class="top-right-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="main-item">
                    <img src={props.image} alt="cardimg1"/>
                </div>
                <h2 class="item-heading">
                  {props.name}
                </h2>
                <p class="item-description">
                    {props.description}
                </p>
                <ul class="rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                </ul>
                <p class="item-price"><span >$</span>{props.price}</p>
                <button class="item-cart-btn">Add To Cart</button>
            </div>
        </div>
    )
}

export default Features