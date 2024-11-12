import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import { getAll } from '../../api/read';

const Test = () => {
    const location = useLocation();
    const { data, error, isLoading } = getAll("http://localhost:3000/cars");
    // const [cars, setCars] = useState([]);
  
    return (
<div>

</div>
    );
};

export default Test;
