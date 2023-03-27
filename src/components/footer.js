// import React from 'react'
// import "../styles/footer.css"

// const footer = () => {
//   return (
//     <div className='footer'>
//       <div className='footer_container'>
//         <div className='footer_text1'>
//           <h1>HELPY MOTO PVT.LTD</h1>
//           <br/>
//           <h3>Our venture is to restore motors all over India in an efficient manner without getting their car to the restore keep and saving their precious time.</h3>
//         </div>
//         <div className='footer_text2'>
//           <h2>Practice Areas</h2>
//           <h4>Repairing</h4>
//           <h4>Engine</h4>
//           <h4>Painting</h4>
//           <h4>Body & Tires</h4>
          
//         </div>
//         <div className='footer_text3'>
//           <h2>Useful Links</h2>
//           <h4>Your Account</h4>
//           <h4>Become a Custombers</h4>
//           <h4>View our TOP OFFERS</h4>
//           <h4>GET Help</h4>
          
//         </div>
//         <div className='footer_text4'>
//           <h2>Sign up to our newsletter</h2>
//           <h4>We will substanically email newsletters to you</h4>
//           <div className='input_button'>
//             <input/>
//             <button id='footer_btn'>Submit</button>
//           </div>
//         </div>
        
//       </div>
//       <div className='footer_text5'>
//         <h2>Contact Us</h2>
//         <h3>Ed Sheeran</h3>
//         <h3>Grumpy Old Management LTD.,</h3>
//         <h3>PO box 83, 22 Notting Hill Gate,W11 3JE UK</h3>
//         <h3>Ed sheran2022@gmail.com</h3>
//         <h3>+91 xxxxx xxxxx</h3>
        
//       </div>
//     </div>
//   )
// }

// export default footer

import React from 'react'
import "../styles/footer.css"

const footer = () => {
  return (

    <footer id="footer">
    {" "}
    <div className="footer-newsletter">
      {" "}
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          <div className="col-lg-6">
            {" "}
            <h4> Sign up to Our Newsletter</h4>{" "}
            <p>
            We will be consistently sending you valuable newsletters with substantial content.
            </p>{" "}
          </div>{" "}
          <div className="col-lg-6">
            {" "}
            <form action="" method="post">
              {" "}
              <input class="a" type="email" name="email" placeholder="Email-Address" />
              <input type="submit" defaultValue="Subscribe" />{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="footer-top">
      {" "}
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            <h4>Useful Links</h4>{" "}
            <ul>
              {" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Terms of service</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Privacy policy</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            <h4>Practice Areas</h4>{" "}
            <ul>
              {" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Repairing</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Engine</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Painting</a>
              </li>{" "}
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Body and Tires</a>
              </li>{" "}
              
            </ul>{" "}
          </div>{" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            <h4 >Contact Us</h4>{" "}
            <p>
              {" "}
              A108 Adam Street <br /> New York, NY 535022
              <br /> United States <br />
              <br /> <strong>Phone:</strong> +1 5589 55488 55
              <br /> <strong>Email:</strong> info@example.com
                <br />{" "}
                <br />{" "}
                
              {/* <a href="#" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" width="250" alt="google play and apple app store logos"  /></a> */}
             
            </p>{" "}
          </div>{" "}
          <div className="col-lg-3 col-md-6 footer-links abc">
            {" "}
            {/* <h2> <img src={require("../image/image1.jpg")} alt="logo" className="img-fluid" style={{ width:"150px",marginTop:"-40px",marginBottom:"3px" }} /></h2>{" "} */}
            <p className='j'>
            At our venture, we strive to restore motors all across India in an efficient manner that saves our customers' valuable time by eliminating the need to bring their cars to a repair shop
              </p>{" "}
              <br />{" "}
              <br />{" "}
            <div className="social-links">
              {" "}
              <a href="#" className="twitter">
                <i className="bx bxl-twitter" />
              </a>{" "}
              <a href="#" className="facebook">
                <i className="bx bxl-facebook" />
              </a>{" "}
              <a href="#" className="instagra">
                <i className="bx bxl-instagram" />
              </a>{" "}
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin" />
                </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div className="container">
      {" "}
      <div className="copyright">
        {" "}
        © 2023 Helpy Moto{" "}
        <strong>
            <span></span>
            <br />
        </strong>
         All Rights Reserved{" "}
      </div>{" "}
      <div className="credits">
        {" "}
        Designed by <a href="#">Momin Ashfak</a>{" "}
      </div>{" "}
    </div>
  </footer>
   


  )
}

export default footer;