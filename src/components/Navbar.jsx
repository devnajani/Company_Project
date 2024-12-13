import { createContext, useState } from "react"
import Addtocart from "./Addtocart"
import Bill from "./Bill"
import {Link} from "react-router-dom"
export const Productcart = createContext();

export default function Navbar() {

  const[percart,setpercart]=useState([])
  function handleonclick(item){
    setpercart([...percart,item])
    return(<Productcart.Provider value={percart}>
      <Addtocart/>
    </Productcart.Provider>)

      
    
  }

    const cart=[
        {imgurl:"https://themewagon.github.io/foody2/img/product-1.jpg",price:19,name:"fresh-tomato"},
        {imgurl:"https://themewagon.github.io/foody2/img/product-2.jpg",price:19,name:"fresh-pinepal"},
        {imgurl:"https://themewagon.github.io/foody2/img/product-3.jpg",price:19,name:"fresh-orange"},
        {imgurl:"https://themewagon.github.io/foody2/img/product-4.jpg",price:19,name:"fresh-strawberry"},
        {imgurl:"https://themewagon.github.io/foody2/img/product-5.jpg",price:19,name:"fresh-cucumber"},
        {imgurl:"https://themewagon.github.io/foody2/img/product-6.jpg",price:19,name:"fresh-chiku"},
        {imgurl:"https://themewagon.github.io/foody2/img/product-7.jpg",price:19,name:"fresh-potato"},
        {imgurl:"https://themewagon.github.io/foody2/img/product-8.jpg",price:19,name:"fresh-banana"}
    ]
    return (
        <>
           <nav className="top-0 left-0 w-full z-50 bg-white text-black flex items-center justify-between p-4 sm:sticky sm:z-50 md:fixed md:z-50">
  <div className="text-green-600 text-4xl sm:text-4xl sm:ml-2 font-bold flex items-center">
    F<div className="text-orange-600">OO</div>dy
  </div>

  <div className="hidden sm:flex sm:ml-3 sm:gap-3 gap-6">
    <a href="#" className="text-xl text-center hover:text-green-600">Home</a>
    <a href="#" className="text-xl text-center hover:text-green-600">About us</a>
    <a href="#" className="text-xl text-center hover:text-green-600">Products</a>
   <Link to="/bill"> <a href="#" className="text-xl text-center hover:text-green-600">add-to-cart</a></Link>
    <a href="#" className="text-xl text-center hover:text-green-600">Contact us</a>
  </div>

  {/* Mobile Menu */}
  <div className="sm:hidden flex items-center">
    <button id="menu-button" className="text-black hover:text-green-600 focus:outline-none">
      ☰
    </button>
    <div id="mobile-menu" className="hidden absolute top-full left-0 w-full bg-white shadow-md">
      <a href="#" className="block text-xl text-center hover:text-green-600 p-2">Home</a>
      <a href="#" className="block text-xl text-center hover:text-green-600 p-2">About us</a>
      <a href="#" className="block text-xl text-center hover:text-green-600 p-2">Products</a>
      <a href="#" className="block text-xl text-center hover:text-green-600 p-2">add-to-cart</a>
      <a href="#" className="block text-xl text-center hover:text-green-600 p-2">Contact us</a>
    </div>
  </div>
</nav>




{/* ----------------------------------------------------------- */}
            {/* Hero Section */}
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="relative ">
            <img src="https://themewagon.github.io/foody2/img/carousel-1.jpg"className="w-full sm:w-full h-full"/>
            <div className="absolute  inset-0 flex justify-start text-black ml-24 mt-56 text-7xl sm:justify-start sm:ml-4 sm:text-7xl sm:text-left font-bold">natural food<br/>
            is always healthy</div>
        </div>
    </div>
    <div class="carousel-item">
    <div className="relative">
            <img src="https://themewagon.github.io/foody2/img/carousel-2.jpg"className="w-full h-full"/>
            <div className="absolute  inset-0 flex justify-start text-black ml-24 mt-56 text-7xl font-bold">natural food<br/>
            is always healthy</div>
        </div>
    </div>
   
  </div>
  <button class="carousel-control-prev btn-danger" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next btn-danger" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* next session */}
<div className="container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center bg-white ">
<img 
  src="https://themewagon.github.io/foody2/img/about.jpg" 
  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mt-8"
/>

    <div className="text-black  mt-8 text-5xl font-bold">Best Organic Fruits<br/> And Vegetables
    <div className="text-xl font-medium mt-9">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
        <div className="font-normal mt-9">
            <ul>
                <li>Tempor erat elitr rebum at clita</li>
                <li>Aliqu diam amet diam et eos</li>
                <li>Clita duo justo magna dolore erat amet</li>
            </ul>
        </div>  
    </div>
    </div>
</div>
{/* ------------------- */}
<div className="bg-light mt-7 ">
    <div className="ml-70 p-6 text-center text-black font-bold text-5xl">Our Features
        <div className="text-xl font-thin p-2">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed <br/>rebum vero dolor duo.</div>
    </div>
    <div className="flex gap-3 flex-wrap justify-around text-center">
    <div className=" border border-black bg-slate-100 "><img src="https://themewagon.github.io/foody2/img/icon-1.png"className=" mt-2 ml-28"></img>
    <div className="text-2xl font-medium text-black">Natural Process</div>
    <div className="text-lg font-light py-4 px-2">Tempor ut dolore lorem kasd <br/>vero ipsum sit eirmod sit.<br/> Ipsum diam justo sed vero dolor duo.</div></div>

    <div className=" shadow-xl border border-black  bg-slate-100 "><img src="https://themewagon.github.io/foody2/img/icon-1.png" className=" mt-2 ml-28"></img>
    <div className="text-2xl font-medium text-black">Natural Process</div>
    <div className="text-lg font-light py-4 px-2">Tempor ut dolore lorem kasd <br/>vero ipsum sit eirmod sit.<br/> Ipsum diam justo sed vero dolor duo.</div></div>


    <div className=" border border-black  bg-slate-100 "><img src="https://themewagon.github.io/foody2/img/icon-1.png"className=" mt-2 ml-28"></img>
    <div className="text-2xl font-medium text-black">Natural Process</div><div className="text-lg font-light py-4 px-2">Tempor ut dolore lorem kasd <br/>vero ipsum sit eirmod sit.<br/> Ipsum diam justo sed vero dolor duo.</div></div>


    </div>            
        
    </div> 

     {/*next section-------------------------------------------------------------------------  */}
     <div className="container bg-light p-7 m-2">
        <div className="text-black font-bold text-5xl">Our Products
            <div className="text-xl font-thin p-3">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. <br/>Ipsum diam justo sed rebum vero dolor duo.</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {
    cart.map((item)=>(
      <Addtocart 
      img={item.imgurl}
      fruitname={item.name}
      price={item.price}
      addToCart={()=>handleonclick(item)}/>
    ))
  }

  
</div>

            
        </div>
        
     </div>
     {/* -------------------------------------- */}
     <div class=" bg-black text-white card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
        </>
    )}
