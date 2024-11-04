import React from 'react';
import { useLocation } from 'react-router-dom';

const Test = () => {
    const location = useLocation();
    const { data } = location.state || {};

    const cardStyle = {
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
    };

    const textStyle = {
        fontSize: '18px',
        color: '#555',
        marginBottom: '8px',
    };

    return (
        <div style={cardStyle}>
            <div style={titleStyle}>{data?.name || 'No Name'}</div>
            <div style={textStyle}>Color: {data?.color || 'N/A'}</div>
            <div style={textStyle}>Status: {data?.status || 'N/A'}</div>
        </div>
    );
};

export default Test;
