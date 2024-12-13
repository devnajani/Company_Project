import React,{ useContext } from "react"
import {Productcart} from "./Navbar" 

export default function Bill(props){
    const Pt=useContext(Productcart)
    return(
        <>
        <h1>hello {Pt}</h1>
        </>
    )
}