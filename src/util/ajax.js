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
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4) {
                    if ( xhr.status  === 200) {
                        resolve(JSON.parse(xhr.responseText))
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
        for (let item in data) {
            if(typeof data[item] === 'object') {
                tmp += item + '=' + encodeURIComponent(JSON.stringify(data[item]))
            } else {
                tmp += item + '=' + data[item]
            }
            tmp += '&'
        }
        return tmp.slice(0, -1)
    }
    getUrlQuery (name) {
        let url = window.location.search.split('?')[1] || ''
        let regexp = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
        let rtn = url.match(regexp)
        return rtn ? decodeURIComponent(rtn[2]) : null
    }
}
//let ajaxTest = new ajax('http://adminv2.happymmall.com/manage/statistic/base_count.do')
export default ajax