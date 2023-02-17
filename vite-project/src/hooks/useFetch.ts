import React, { useEffect, useState } from "react";
import axios from "axios";
import { IData } from "../types/type";

function useFetch(url: string) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [items, setItems] = useState<IData[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(()=>{
    const fetchData = async () => {
      const aboartControllar = new AbortController();
        try {
          setLoading(true);
          const res = await axios.get(url);
          setItems(res.data);
        } catch(err:any){
          setError(err)
        }
          finally {
          setLoading(false);
        }

        return ()=>{
          aboartControllar.abort();
        }
      };

      
      fetchData()


  }, [url])
  
  return {items, loading, error, setItems};
}

export default useFetch;
