import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useAxiosGet(url){
    const [requests, setRequests] = useState({
        loading: false,
        data: null,
        error: false,
    });

    useEffect(()=>{
        window.scrollTo(0,0);
        setRequests({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequests({
                    loading: false,
                    data: response.data,
                    error: false
                    
                });
            })
            .catch(()=>{
                setRequests({
                    loading: false,
                    data: null,
                    error: true
                    
                })
            })
    },[url]);

    return requests;
}
