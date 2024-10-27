import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.721379381654!2d38.479883317382814!3d7.046798700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14f004dd90af3%3A0x2f2c5e47cc8bda0b!2sSOL%20MOTORCYCLE%20AND%20BAJAJ%20SPEAR%20PART!5e0!3m2!1sam!2set!4v1730009979069!5m2!1sam!2set"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
