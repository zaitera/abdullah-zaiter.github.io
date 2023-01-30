import React, { Component } from 'react';
import ReactGA from "react-ga4";

class Portfolio extends Component {
  
  render() {
    const sendEvent = function(actiontxt, labeltxt) {
      // event.preventDefault();
      ReactGA.event({category: 'click',
      action: actiontxt,
      label: labeltxt});
    };
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} onClick={ () => { sendEvent('accessed \''+projects.title+'\'s repository','Went to Github') }}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                     <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {/* <Slider {...settings}> */}
                  {projects}
                {/* </Slider> */}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
