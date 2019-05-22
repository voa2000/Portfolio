import React, { Component } from "react";
import "./Contact.css";
import viv from "../images/viv.jpg";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <div className="contact-grid">
          <div col={6}>
            <h2>Vivienne Owusu-Ansah</h2>
            <img src={viv} alt="Pic of Vivienne" />
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <h2>Contact Me</h2>
          <hr />
        </div>
      </div>
    );
  }
}
