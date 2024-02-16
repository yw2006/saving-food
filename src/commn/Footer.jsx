import React from 'react';
import "./style/Footer.css";
// import { flowers } from "../pages/main/component/pics/bg08-150x150.jpg";
function Footer() {
    return (
        <div className='backGroundFooter'>
            <div className='container'>
                <div className='row'>
                    <div className='gridSystem categories'>
                        <div className='first_dev_tool staticWidth'>
                            <p className='title_category'>About</p>
                            <p>Lorem ipsum dolor sllo, xercitationem,loribus saepe?</p>
                            <hr />
                            <p><i className='fa fa-calls'></i>6666 000 8888</p>
                            <p><i className='fa fa-calls'></i> needhelp@company.com</p>
                            <p><i className='fa fa-location ps'></i>66 Brooklyn street New York, USA</p>
                        </div>

                        <div className='second_dev_tool staticWidth'>
                            <p className='title_category'>Latest News</p>
                            <div className='iconCardInfo'>
                                <img href={"flowers"} alt="Can't Find" />
                                <div className='text_content'>
                                    <p>
                                        January 12, 2022</p>
                                    <p>Trees are a weapon in stormwater</p>
                                </div>
                            </div>
                            <div className='iconCardInfo'>
                                <img href={'flowers'} alt="Can't Find" />
                                <div className='text_content'>
                                    <p>
                                        January 12, 2022</p>
                                    <p>Trees are a weapon in stormwater</p>
                                </div>
                            </div>
                        </div>

                        <div className='third_dev_tool staticWidth'>
                            <p className='title_category'>NewsLetter</p>
                            <p>Lorem ipsum dolor sllo,xercitationem,loribus saepe?</p>
                            <form method='post' action='' datatype='text'>
                                <input type='text' placeholder='your adderss' />
                                <input type='submit' value={"Subscribe"} />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer