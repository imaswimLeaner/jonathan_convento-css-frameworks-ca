import React from "react";
import { Tabs, Tab, Media } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import TabImg1 from "../assets/TabImgs/tab-1.jpg";
import TabImg2 from "../assets/TabImgs/tab-2.jpg";
import TabImg3 from "../assets/TabImgs/tab-3.jpg";

function ContentTabs() {
  return (
    <div className="d-none d-md-block content-tabs">
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="First">
          <Media>
            <img src={TabImg1} alt="old tv" />
            <Media.Body>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.{" "}
              <div className="share">
                Share
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </div>
            </Media.Body>
          </Media>
        </Tab>
        <Tab eventKey="second" title="Second">
          <Media>
            <img src={TabImg2} alt="frames in wall" />
            <Media.Body>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.{" "}
              <div className="share">
                Share
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </div>
            </Media.Body>
          </Media>
        </Tab>
        <Tab eventKey="third" title="Third">
          <Media>
            <img src={TabImg3} alt="Old Frame in wall" />
            <Media.Body>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.{" "}
              <div className="share">
                Share
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </div>
            </Media.Body>
          </Media>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ContentTabs;