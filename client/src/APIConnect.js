import axios from 'axios';

const url = '/api';

class APIConnect {
    
    static getTodos() {
        return new Promise(async (resolve, reject) => {

            try {
                const res = await axios.get(`${url}/todos`);
                const data = res.data;
                resolve(data);
            } catch (err) {
                reject(err);
            }

        });
    }

    static addTodo(text) {
        return axios.post(`${url}/create`, {text});
    }

    static deleteTodo(id) {
        return axios.delete(`${url}/delete/${id}`);
    }

    static checkTodo(id, status) {
        return axios.put(`${url}/check/${id}/${status}`);
    }

}

export default APIConnect;