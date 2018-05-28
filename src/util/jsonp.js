function jsonp(url,callback){
    let script = document.createElement('script')
    let target =document.getElementsByTagName('head')[0];
    function noop (){}
    function cleanup(){
        target.removeChild(script)
        delete window[callback]
    }
    script.src=url
    target.appendChild(script)
    window[callback]=(data)=>{
       fn(data)
       cleanup()
    }  
}
function jsonpPromise(url,callback){
    return new Promise((resolve,reject)=>{
    let script = document.createElement('script')
    let target = document.getElementsByTagName('head')[0];
    function cleanup(){
        target.removeChild(script)
        delete window[callback]
    }
    script.src=url
    target.appendChild(script)
    window[callback]=(data)=>{
        resolve(data)
        cleanup()
     }  
    })
}


export {jsonp,jsonpPromise}