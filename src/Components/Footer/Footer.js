import React from 'react'
import { FormattedMessage } from 'react-intl';
import "./Footer.css";
import CopyrightSvg from "../../Assets/Icons/copyright.svg";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <React.Fragment>
            <div id="Footer" className="container-fluid">
                <div className="row footer-row">
                    {/*<div className="col-lg-4 col-sm-12 col-xs-12 footer-icon-col footer-col">*/}
                    <div className="col-4 footer-icon-col footer-col">
                        <a href={"#Home"}><img className="img float-left" src="/Assets/Logos/logoFooter.svg" alt="ITTI"/></a>
                        <div id="footer-copyright-region">
                            <img className="copy" src={CopyrightSvg} alt="copyright"/>
                            <span>2021 ITTI. <FormattedMessage id="AllRightsReserved"/></span>
                        </div>
                    </div>
                    {/*<div className="col-lg-3 col-sm-12 col-xs-12 footer-col">*/}
                    <div className="col-3 footer-col">
                        <p className="footer-section-title"><FormattedMessage id="MeetUs"/></p>
                        <a href={"#Us"}><p className="footer-section-content"><FormattedMessage id="AboutUsFooter"/></p></a>
                        <p className="footer-section-content"><FormattedMessage id="FAQ"/></p>
                    </div>
                    {/*<div className=" col-lg-3 col-sm-12 col-xs-12  footer-col">*/}
                    <div className="col-3 footer-col">
                        <p className="footer-section-title"><FormattedMessage id="ContactUs"/></p>
                        <p className="footer-section-content"><a href="mailto:somositti@gmail.com">contacto@somositti.com</a></p>
                        <p className="footer-section-content"><a href="tel:+573144840591">+57 314 4840591</a></p>
                    </div>
                    {/*<div className="col-lg-2 col-sm-12 col-xs-12 footer-col">*/}
                    <div className="col-2 footer-col">
                        <p className="footer-section-title"><FormattedMessage id="FollowUs"/></p>
                        <p className="footer-section-content"><a href="https://www.instagram.com/somositti/" target="_blank" rel="noreferrer">Instagram</a></p>
                        <p className="footer-section-content"><a href="https://www.youtube.com/channel/UC67QLsZD9ftLuXyVH4e-fkA" target="_blank" rel="noreferrer">Youtube</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Footer
