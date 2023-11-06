class Api {
    constructor({ url }) {
        this._url = url;
    };

    async _requestResult(res) {
        if (res.ok) {
            const contentType = res.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return res.json();
            } else {
                return res.text();
            }
        } else {
            const result = await res.json();
            return Promise.reject(result);
        }
    };

    submit(userData) {
        return fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(res => {
                return this._requestResult(res)
            })
    };
};

const ApiSubmit = new Api({
    url: 'http://localhost:8000',
});

export default ApiSubmit;