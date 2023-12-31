const Hero = () =>{
    return(
    <main className="hero">

        <div className="hero-content container">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        </div>

        <div className="hero-img"><img src="/images/project-1-imgs/shoe_image.png" alt="shoes" /></div>

        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="btn-category">Category</button>
        </div>

        <div className="shopping">
            <p>Available on</p>
            <img src="/images/project-1-imgs/flipkart.png" alt="flipkart" />
            <img src="/images/project-1-imgs/amazon.png" alt="amazon" /> 
        </div>
       
       
    </main>
    );
};

export default Hero;