import axios from 'axios'

export default {
    get: (url) => axios({
        'method': 'GET',
        'url': url,
        'headers': {
            'content-type': 'application/octet-stream'
        },
        'params': {}
    })
}