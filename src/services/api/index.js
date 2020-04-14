import react from 'react';

import { options } from './options/index';

// exports.apiConnect = async (url) => {
//     try {
//         let response = await fetch(url, options('POST', 'cors', 'default'));
//         let json = await response.json();
//         return json.data;
        

//         fetch('https://reactnative.dev/movies.json',
//             options('POST', 'cors', 'default'))
//             .then((response) => response.json())
//             .then((json) => setData(json.movies))
//             .catch((error) => console.error(error))
//             .finally(() => setLoading(false));
//     } catch (err) {
//         console.log(err);
//     }
// }

export default apiConnect = (
    url
) => {
    fetch(url, options('POST', 'CORS', 'default'))
        .then( res => {
            if(res.status === 200) return res.json();
        })
        .then( json => {
            
        })
}