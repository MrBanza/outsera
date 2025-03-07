import http from 'k6/http';
import {check, sleep} from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 100},
        { duration: '3m', target: 500},
        { duration: '1m', target: 0  },
    ],
    thresholds:{
        http_req_duration:  ['p(95)<500'],
        http_req_failed:    ['rate<0.01'],    
    },
};

export default function () {
    let res = http.get('https://jsonplaceholder.typicode.com/posts/1');

    check(res, {
        'status code is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1);
}
