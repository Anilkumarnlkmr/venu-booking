import axios from 'axios';
import React from 'react';
import {useParams} from 'react-router-dom';

function VenuDeatils() {
    const {userId} = useParams();
    console.log('anl in details',userId);
    React.useEffect(()=>{
        // axios.get(`http://localhost:8080/api/venue/${userId}`).then((res)=>console.log('anil',res))
    },[])
    
    return(<>
        <p>inVnuDEtails{userId}</p>

    </>)
}

export default VenuDeatils;