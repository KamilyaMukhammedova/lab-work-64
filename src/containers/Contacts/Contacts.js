import React from 'react';

const Contacts = () => {
  return (
    <div className="card m-5 text-white bg-dark" style={{width: '30rem'}}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMVE3gXsAJVbmpntPC40nD9bDe_vg36fGXQ&usqp=CAU"
        className="card-img-top"
        alt="contacts image"
      />
      <div className="card-body">
        <h5 className="card-title">Contact me</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur consequatur dolore est
          eveniet, harum hic impedit incidunt ipsa obcaecati, odit porro quas reiciendis, sit sunt tempora unde veniam
          voluptatum. Architecto at magnam molestias perspiciatis voluptates. Accusantium consequatur delectus dolor
          eligendi ipsam magni molestias nam pariatur, quisquam, temporibus, tenetur veniam!
        </p>
        <a href="#" className="btn btn-primary">Contact</a>
      </div>
    </div>
  );
};

export default Contacts;