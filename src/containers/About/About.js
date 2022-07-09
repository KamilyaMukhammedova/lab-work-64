import React from 'react';

const About = () => {
  return (
    <div className="card m-5 text-white bg-secondary" style={{width: '25rem'}}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj79pwJtB8LxOXEbKzyvPyxI-HElEgFedWsQ&usqp=CAU"
        className="card-img-top"
        alt="about"
      />
      <div className="card-body">
        <h5 className="card-title">About</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur consequatur dolore est
          eveniet, harum hic impedit incidunt ipsa obcaecati, odit porro quas reiciendis, sit sunt tempora unde veniam
          voluptatum. Architecto at magnam molestias perspiciatis voluptates. Accusantium consequatur delectus dolor
          eligendi ipsam magni molestias nam pariatur, quisquam, temporibus, tenetur veniam!
        </p>
      </div>
    </div>
  );
};

export default About;