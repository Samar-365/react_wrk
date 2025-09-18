import React from 'react'

function about() {
  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
        <div className='col-md-6 mb-4 mb-md-0'>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/036/290/329/small_2x/about-us-metaphor-company-information-flat-illustration-template-business-profile-office-information-customer-support-our-team-about-company-vector.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">About Us</h2>
          <p className="text-muted">
            “A salon dedicated to creating styles that reflect your personality while keeping your hair healthy and radiant.”
          </p>
          <p className="text-muted">
“Where expert care, creativity, and premium products come together to give you the look you deserve.”
          </p>
          <p className="text-muted">
“More than just a haircut—our salon is where confidence and style are crafted every day.”
          </p>
          <p className="text-muted">
“Blending modern trends with personalized care to help you look and feel your absolute best.”
          </p>
          <p className="text-muted">
“Your trusted destination for beautiful transformations and everyday hair confidence.”
          </p>
          <button className="btn btn-primary mt-3">Learn More</button>
      </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h4>Our Mission</h4>
          <p className="text-muted">
            At [Your Salon Name], we believe your hair is your crown—and it deserves the royal treatment. Our salon is more than just a place for a haircut; it’s where style meets care, and every client leaves feeling confident, refreshed, and radiant.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Vision</h4>
          <p className="text-muted">
            With a team of passionate and experienced stylists, we specialize in modern cuts, vibrant coloring, smoothing treatments, and glamorous styling tailored to suit your personality and lifestyle. Whether you’re looking for a bold transformation or a simple refresh, we take the time to understand your vision and bring it to life..
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>Our Values</h4>
          <p className="text-muted">
           We pride ourselves on using premium products, staying up to date with the latest trends, and creating a warm, welcoming atmosphere where you can relax and enjoy the experience.

At [Your Salon Name], it’s not just about great hair—it’s about helping you feel your best, inside and out.
          </p>
        </div>
      </div>
    </div>



  )
}

export default about
