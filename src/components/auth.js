
import Api from '../utils/Api';
export const BASE_URL = 'https://auth.nomoreparties.co';


// const check = (res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       return Promise.reject(`Ошибка ${res.status}`);
//     }
//   }

// export const register = (email, password) => {
//     return fetch(`${BASE_URL}/sign-up`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     })
//         .then((response) => {
//             return response.json();
//         })
//         .then((res) => {
//             return res;
//         })
//         .catch((err) => console.log(err));
// };

export const register = (email, password) => {
    return fetch(`${BASE_URL}/sign-up`, {
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(Api._check)
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/sign-in`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(Api._check)
    // .then((data) => {
    //     if (data.token){
    //         localStorage.setItem('jwt', data.token);
    //         return data;
    //     }
    // })
}

export const authorized = (identifier, password) => {
    return fetch(`${BASE_URL}/auth/local`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identifier, password })
    })
        .then((response => response.json()))
        .then((data) => {
            if (data.user) {
                localStorage.setItem('jwt', data.jwt);
                return data;
            }
        })
        .catch(err => console.log(err))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then(response => response)
        .then(Api._check)
}
