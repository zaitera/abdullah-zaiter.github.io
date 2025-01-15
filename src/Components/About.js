import React, { Component } from 'react';
import ReactGA from "react-ga4";

class About extends Component {

   sendEvent = (event) => {
      // event.preventDefault();
      ReactGA.event({category: 'click',
      action: 'download resume',
      label: 'CV'});
   };
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var country = this.props.data.address.country;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns center">
            <img className="profile-pic"  src={profilepic} alt="Zaitech Development logo" />
         </div>
         <div className="nine columns main-col">
            <h2>About us</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                   <p className="address">
                       <span>{name}</span><br/>
                       {city}, {state}, {zip}<br/>
                       <span>{country}
                   </span><br/>
                       <span>{phone}</span>
                       Email: <span>{email}</span>
                   </p>
               </div>
                <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" onClick={ () => {this.sendEvent()}} target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
