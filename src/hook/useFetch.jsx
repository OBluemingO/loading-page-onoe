import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, depend=null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await setLoading(true);
        const { data: result } = await axios({
          method: "GET",
          baseURL: "https://fakestoreapi.com",
          url: url,
        });
        await setData(result);
        await setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [ depend ]);
  
  return { loading, data };
};

export default useFetch;
