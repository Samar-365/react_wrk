import React from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Lfooter() {
  return (
    <div>
      <div>
        <div>

<footer className="bg-body-tertiary text-center">
  <div className="container p-4">
    <section className="mb-4">
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
    </section>
    <section className>
      <form action>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up to book your very first appointment</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form5Example24" className="form-control" placeholder='E-mail'/>
              <label className="form-label" htmlFor="form5Example24" ></label>

            </div>
          </div>
          <div className="col-auto">
            <button data-mdb-ripple-init type="submit" className="btn btn-outline mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
    <section className="mb-4">
      <p>
        Whether you’re looking for a quick trim, a bold transformation, or a relaxing spa-like experience, we provide a warm and professional atmosphere that makes every visit special. Using premium products and the latest techniques, we ensure your hair stays healthy, radiant, and full of life.
      </p>
    </section>
    <section className>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Phone</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="tel:+91-9405924152" className="contact-link-item">
            <FaPhone />
            <span>+91-9405924152</span>
          </a>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Linkedin</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="https://www.linkedin.com/in/samar-shetye-86295432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Email</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="mailto:samar.shetye03@gmail.com" className="contact-link-item">
                <FaEnvelope />
                <span>samar.shetye03@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Github</h5>
          <ul className="list-unstyled mb-0">
            <li>
            <a href="https://github.com/Samar-365" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <FaGithub />
            <span>https://github.com/Samar-365</span>
          </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</footer>

        </div>
      </div>
    </div>
  )
}

export default Lfooter
