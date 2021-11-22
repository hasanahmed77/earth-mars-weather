import React, { useState } from 'react'
import axios from 'axios';

const useFetch = (url) => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        const result = await axios(url);
    
        setWeather(result);
        setLoading(true);
        console.log(result);
    }

    return { weather, loading, fetchItems }
}

export default useFetch;