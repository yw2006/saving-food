// import React from "react";

// function Feedbacks() {
//   return (
//     <div>
// <section class="testimonial-container container-fluid bg-light">
//   <h5 class="text-center text-success">Our Testimonials</h5>
//   <h1 class="text-center questionheader">What They Say</h1>
// <div>
//   <div class="row m-auto">
//     {feedbacks.map((feedback, index) => {
//       return (
//         <div class="col-md-2 m-auto bg-white mt-4" key={index}>
//           <div class="testimonial-box">
//             <div className="card-content w-100 p-3">
//               <p class="content-text">{feedback.donaterfeedback}</p>
//             </div>
//             <hr className="text-center hr w-100" />
//             <div className="text-center">
//               <img
//                 src={feedback.donatorimage}
//                 className="img cardimg col-md-5"
//                 alt=""
//               />
//               <p>{feedback.donatername}</p>
//               <p>{feedback.type}</p>
//             </div>
//             <p class="testimonial-author"></p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>
// </section>;
//     </div>
//   );
// }
// export default Feedbacks;

import React, { useEffect, useRef, useState } from "react";
import "../style/feedback.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { feedbacks } from "../../../stup/context/feedbacks";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function Feedbacks() {
  return (
    <div>
      <section className="testimonial-container container-fluid bg-light">
        <h5 className="text-center text-success">Our Testimonials</h5>
        <h1 className="text-center questionheader mb-4">What They Say</h1>
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div>
              <div class="row m-auto">
                {feedbacks.map((feedback, index) => {
                  return (
                    <div class="col-md-2 m-auto bg w-100 h-100" key={index}>
                      <SwiperSlide>
                        <section class="mx-auto w-100">
                          <div class="card testimonial-card w-100 mt-2 col-md-3">
                            <div class="mx-auto white feedback p-4">
                              <p >
                                <i class="fas fa-quote-left"></i>
                                {feedback.donaterfeedback.slice(0,50)}....
                              </p>
                            </div>
                            <hr />
                            <div class="card-body text-center">
                              <img
                                src={feedback.donatorimage}
                                class="rounded-circle w-25 m-auto"
                                alt="avatar"
                              />
                              <h5 class="card-title font-weight-bold">
                                {feedback.donatername}
                              </h5>
                              <h6 class="card-title font-weight-bold">
                                {feedback.type}
                              </h6>
                            </div>
                          </div>
                        </section>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </div>
            </div>
          </Swiper>
        </>
      </section>
    </div>
  );
}
