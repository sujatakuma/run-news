import React from 'react'
import './Footer.css'

const Savices = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Customer support section</h1>
            <div class="card-group" >
                <div class="card" style={{ margin: '7px', height: 150, width: 150, cursor: 'pointer', textAlign: 'center' }} >
                    <img src="https://www.dispatchtrack.com/hubfs/last-mile-delivery-companies.webp" height={100} width={100} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Products Delivery </h5>
                        <p class="card-text"></p>
                    </div>

                </div>
                <div class="card" style={{ margin: '7px', height: 150, width: 150, cursor: 'pointer', textAlign: 'center' }}>
                    <img src="https://mnasserlaw.com/wp-content/uploads/2020/10/e-payment.jpg" height={100} width={100} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Payment help</h5>
                        <p class="card-text"></p>
                    </div>

                </div>
                <div class="card" style={{ margin: '7px', height: 150, width: 150, cursor: 'pointer', textAlign: 'center' }}>
                    <img src="https://web-assets.domo.com/miyagi/images/product/product-domo-central-help-team-collaboration-2x.png" height={100} width={100} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title" >Any help of product
                        </h5>
                        <p class="card-text"></p>
                    </div>

                </div>
            </div>
            <div >
                <div className='footer' style={{ display: 'flex',textDecoration:'none',margin:"10px" }}>
                    <ul style={{listStyle:'none', margin:'60px'}}>
                        <li >Get to Know Us</li>

                        <li>About Us</li>
                        <li>Careers</li>
                        <li> Press Releases</li>
                        <li>Amazon Science</li>
                    </ul >
                    <ul style={{listStyle:'none', margin:'60px'}}>

                        <li>Connect with Us</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                    <ul style={{listStyle:'none', margin:'60px'}}>


                        <li>Audible</li>
                        <li>Download</li>
                        <li>Audio Books</li>
                        <li>Prime Now</li>
                        <li>2-Hour Delivery</li>
                        <li>on Everyday Items</li>

                    </ul>
                    <ul style={{listStyle:'none', margin:'60px'}}>

                        <li>IMDb</li>
                        <li>Movies, TV</li>
                        <li> & Celebrities</li>

                    </ul>

                </div>
            </div>
        </div>



    )
}


export default Savices
