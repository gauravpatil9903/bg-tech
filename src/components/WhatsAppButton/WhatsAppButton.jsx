// import React from 'react';

// const WhatsAppButton = ({ phoneNumber, message }) => {
//   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

//   return (
//     <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
//       <button style={{ 
//         backgroundColor: '#25D366', 
//         color: '#fff', 
//         padding: '10px 20px', 
//         border: 'none', 
//         borderRadius: 20, 
//         cursor: 'pointer', 
//         position: 'fixed', 
//         bottom: '20px', 
//         right: '20px', 
//         zIndex: 1000 
//       }}>
//         Chat on WhatsApp
//       </button>
//     </a>
//   );
// };

// export default WhatsAppButton;



import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button style={{
        backgroundColor: '#25D366',
        color: '#fff',
        width: '60px',
        height: '60px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'fixed',
      
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
      }}>
        <i className="fab fa-whatsapp"></i>
      </button>
    </a>
  );
};

export default WhatsAppButton;
