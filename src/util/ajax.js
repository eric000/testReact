import { resolve, reject } from "when";
import { stringify } from "postcss";

class ajax {
    constructor(url, data = undefined) {
        this.url = url
        this.data = data
    }
    init() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open('POST', this.url, false)
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4) {
                    if ( xhr.status  === 200) {
                        resolve(xhr.responseText)
                    } else {
                        reject(xhr.responseType, xhr.responseText)
                    }
                    
                }
            }
            xhr.send(this.dataFormat(this.data))
        }) 
    }
    dataFormat (data) {
        if (!data) {
            return undefined
        }
        let tmp = ''
        for (item in data) {
            if(typeof data[item] === 'object') {
                tmp += item + '=' + encodeURIComponent(JSON.stringify(data[item]))
            } else {
                tmp += item + '=' + data[item]
            }
            tmp += '&'
        }
        return tmp
    }
}
let ajaxTest = new ajax('http://adminv2.happymmall.com/manage/statistic/base_count.do')
export default ajax