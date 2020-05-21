import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone = this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              data-netlify="true"
              method="POST"
              id="contactForm"
              name="contactForm"
              onSubmit={this.clearForm}
            >
              <input type="hidden" name="form-name" value="contactForm" />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                      onChange={this.handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                      data-validation-required-message="Please enter your email address."
                      onChange={this.handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="reason">Reason</label>
                    <input
                      className="form-control"
                      id="reason"
                      name="reason"
                      type="text"
                      placeholder="Reason for contact *"
                      required
                      data-validation-required-message="Please enter your reason for contacting."
                      onChange={this.handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Your Message *"
                      required
                      data-validation-required-message="Please enter a message."
                      onChange={this.handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="sendMessageButton"
                    className="btn btn-primary btn-xl text-uppercase"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {city}, {state}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
