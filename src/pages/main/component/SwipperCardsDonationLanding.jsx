import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "../style/SwiperCardsDonationLanding.css"

const SwipperCardsDonationLanding = () => {
    return (
        <div className="container_section">
            <div className='text_cards_swiper'>
                <p className='first_text_swiper_section_cards'>From The Blog .</p>
                <p className='second_text_swiper_section_cards'>Latest News & Article</p>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="card" style={{ textAlign: "start" }}>
                            <img
                                src={`https://placekitten.com/300/200?image=${index + 1}`}
                                className="card-img-top"
                                alt={`Card Image ${index}`}
                            />
                            <div className="card-body">
                                <div className='specailDateCard'>
                                    11 jan,2022
                                </div>
                                <p style={{ fontSize: "20px" }} className="card-title">International of forests 2022</p>
                                <p style={{ fontSize: "15px" }} className="card-text">
                                    By Shadin      January 11, 2022
                                </p>
                                <button className="btn_card_swiper">
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <br />
                <br />
            </Swiper>
        </div>
    );
};

export default SwipperCardsDonationLanding;
