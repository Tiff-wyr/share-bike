/**
 * Created by Administrator on 2018/10/11 0011.
 */
import axios from 'axios'

class Axios {
    static instance = axios.create({
        baseURL: '',
        timeout: 15000
    })

    static get(url, data, config) {
        return new Promise((resolve, reject) => {
            this.instance.get(url, {params: data}, config).then(res => {
                resolve(res.data)
            })
        })
    }

    static fetch(url, data, config, method) {
        return new Promise((resolve, reject) => {
            this.instance[method](url, data, config).then(res => {
                resolve(res.data)
            })
        })
    }

    static put(url, data, config) {
        this.fetch(url,data,config,'put')
    }
    static post(url, data, config) {
        this.fetch(url,data,config,'post')
    }

}

export default Axios

