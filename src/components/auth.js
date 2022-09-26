export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = () => {
    return fetch(`${BASE_URL}/auth/local/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": "somepassword",
            "email": "email@yandex.ru"
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const registered = (username, password, email) => {
    return fetch(`${BASE_URL}/auth/local/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const authorize = () => {
    return fetch(`${BASE_URL}/auth/local/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            "password": "dsfsdfsdfsdf",
            "email": "email@email.ru"
         })
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

export const checkToken = (JWT) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${JWT}`
            }
        
    })
        .then(res => res.json())
        .then(data => data)
}

export const checkTokened = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(res => res.json())
        .then(data => data)
}
