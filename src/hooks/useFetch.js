const useFetch = (url) => {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        const result = await axios(url);
    
        console.log(result);
        setWeather(result);
        setLoading(true);
    }
    fetchItems();

    return { weather }
}

export default useFetch;