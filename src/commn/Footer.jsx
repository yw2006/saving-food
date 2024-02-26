import React from 'react';
import "./style/Footer.css";
import imgFooter from "../../src/pages/main/component/pics/bg08-150x150.jpg";

function Footer() {
    return (
        <div className='backGroundFooter'>
            <div className='container'>
                <div className='row'>
                    <div className='gridSystem categories'>
                        <div className='first_dev_tool staticWidth' style={{ marginTop: "-37px", fontWeight: "600" }}>
                            <p className='title_category' style={{ fontSize: "28px" }}>About</p>
                            <p>Lorem ipsum dolor sllo, xercitationem,loribus saepe?</p>
                            <hr />
                            <p><i className='fa fa-calls'></i>6666 000 8888</p>
                            <p><i className='fa fa-calls'></i> needhelp@company.com</p>
                            <p><i className='fa fa-location ps'></i>66 Brooklyn street New York, USA</p>
                        </div>
                        <div className='third_dev_tool staticWidth mt-sm-5 '>
                            <p className='title_category' style={{ fontSize: "25px", fontWeight: "600", marginTop: "-35px" }}>NewsLetter</p>
                            <p>Lorem ipsum dolor sllo,xercitationem,loribus saepe?</p>
                            <form method='post' action='' datatype='text'>
                                <input type='text' placeholder='your adderss' id='adderess_input' />
                                <button type='submit' className='btn_submission'>Subscripe</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
