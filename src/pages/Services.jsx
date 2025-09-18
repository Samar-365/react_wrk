import React from "react";

function Services() {
  return (
    <div className="container my-5">
      {/* Top section */}
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="https://t3.ftcdn.net/jpg/02/91/37/62/360_F_291376220_4vAflyBidF8fl0JesmL26rTExhZHd72Y.jpg"
            alt="Our Services"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-12 col-md-6">
          <h2 className="mb-3 text-center text-md-start">Our Services</h2>
          <p className="text-muted text-center text-md-start">
            At <strong>[Your Salon Name]</strong>, we offer a full range of hair
            and grooming services designed to keep you looking and feeling your
            best. From precision haircuts and expert beard styling to soothing
            face massages, our team combines creativity with care to deliver
            results that match your personality and lifestyle.
          </p>
          <p className="text-muted fw-bold text-center text-md-start">
            What We Offer:
          </p>
          <ul className="text-muted text-start">
            <li>
              <strong>Haircuts & Styling –</strong> Classic cuts, trendy looks,
              and personalized styles tailored to suit you.
            </li>
            <li>
              <strong>Beard Grooming –</strong> Sharp trims, shaping, and full
              beard care for a polished finish.
            </li>
            <li>
              <strong>Face Massage & Relaxation –</strong> Stress relief and
              glowing skin through calming massage techniques.
            </li>
          </ul>
          <div className="text-center text-md-start">
            <button className="btn btn-success mt-3">Explore More</button>
          </div>
        </div>
      </div>

      {/* Service cards row 1 */}
      <div className="row mt-5">
        <div className="col-12 col-md-4 text-center mb-4">
          <img
            src="https://plus.unsplash.com/premium_vector-1682305356769-1b9776c2ffc8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Haircut"
            className="img-fluid mb-3 rounded"
          />
          <h4>Haircut</h4>
          <p className="text-muted px-2">
            Refresh your look with a professional haircut tailored to your
            style. Whether you prefer a classic trim, trendy layers, or a bold
            new look, our stylists ensure precision and a perfect finish.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center mb-4">
          <img
            src="https://www.shutterstock.com/image-vector/handsome-young-man-shaving-foam-600nw-2142282903.jpg"
            alt="Beard"
            className="img-fluid mb-3 rounded"
          />
          <h4>Beard</h4>
          <p className="text-muted px-2">
            Keep your beard sharp and stylish with expert trimming and shaping.
            From a clean, professional look to a bold, rugged style, we ensure a
            flawless finish.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center mb-4">
          <img
            src="https://media.istockphoto.com/id/1388287437/vector/hair-coloring-isolated-cartoon-vector-illustrations.jpg?s=612x612&w=0&k=20&c=GckXE2Ne2-5fnJZ6-EazS4JuqTkt2TWeoxCh-3Nr9rU="
            alt="Hair Colouring"
            className="img-fluid mb-3 rounded"
          />
          <h4>Hair Colouring</h4>
          <p className="text-muted px-2">
            Transform your look with professional hair coloring. From natural
            shades to bold fashion colors, our experts deliver vibrant,
            long-lasting results.
          </p>
        </div>
      </div>

      {/* Service cards row 2 */}
      <div className="row mt-4">
        <div className="col-12 col-md-4 text-center mb-4">
          <img
            src="https://media.istockphoto.com/id/1408749269/vector/concept-of-skincare.jpg?s=612x612&w=0&k=20&c=kK0gU_FsZ0PUg54MWQS-JNBZEi-TW8-BSgnRDftoJko="
            alt="Facial"
            className="img-fluid mb-3 rounded"
          />
          <h4>Facial</h4>
          <p className="text-muted px-2">
            Refresh and rejuvenate your skin with deep-cleansing facials.
            Designed to remove impurities, hydrate, and restore a healthy glow.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center mb-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/057/023/001/non_2x/a-barber-blow-drying-hair-of-his-client-flat-style-illustration-vector.jpg"
            alt="Blow Dry & Styling"
            className="img-fluid mb-3 rounded"
          />
          <h4>Blow Dry & Styling</h4>
          <p className="text-muted px-2">
            Get the perfect finish with our blow dry and styling. From sleek and
            straight to bouncy curls or waves—we create the look you love.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center mb-4">
          <img
            src="https://thumbs.dreamstime.com/b/kid-hairdresser-child-barber-cut-hair-boy-stylish-haircut-kids-barbershop-salon-background-cartoon-little-client-children-319973615.jpg"
            alt="Kids’ Haircut"
            className="img-fluid mb-3 rounded"
          />
          <h4>Kids’ Haircut</h4>
          <p className="text-muted px-2">
            Fun, gentle, and stylish cuts for kids. Our friendly stylists ensure
            comfort while giving your child a neat, adorable look.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
