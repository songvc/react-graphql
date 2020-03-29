import React from 'react';
import useFetch from 'use-http';

const BASEURL = "https://finnhub.io/api/v1";
const TOKEN = "bpvblknrh5rf9gg9so5g"; 


const CompanyDetails = (props) => {
    console.log('props', props);
    const { location } = props;
    const { pathname } = location;
    const options = {
        data: []
    }
    const url = pathname.split('/')[2]; 
    
    const { loading, error, data } = useFetch(BASEURL + `/stock/profile?symbol=${url}&token=${TOKEN}`, options, [url]);

    return <div>

    </div>
}

export default CompanyDetails;