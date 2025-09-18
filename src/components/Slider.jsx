import React from 'react';

function slider() {
  return (
    <div>
      <div>
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://www.shutterstock.com/image-vector/hand-drawn-cartoon-hairdresser-equipment-600nw-2303073333.jpg" className="d-block w-100" alt="im1" style={{height:"100vh", width:"100vw" }}/>
                </div>
                <div className="carousel-item">
                <img src="https://us.123rf.com/450wm/natalyaroart/natalyaroart2401/natalyaroart240100088/222331226-hairdressers-and-male-clients-in-a-barbershop-hairdressers-and-male-clients-in-a-men-s-beauty-salon.jpg?ver=6" className="d-block w-100" alt="im2" style={{height:"100vh", width:"100vw" }}/>
                </div>
                <div className="carousel-item">
                <img src="https://img.freepik.com/premium-vector/man-getting-haircut-barber-shop-flat-design-illustration_207579-1417.jpg" className="d-block w-100" alt="im3" style={{height:"100vh", width:"100vw" }}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default slider;
