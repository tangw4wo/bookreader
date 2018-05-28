let readerStorage=(function(){
    let prefix = 'html5_reader_'
    let StorageSetter = (key,val)=>{
        return localStorage.setItem(prefix+key,val)
    }
    let StorageGetter = (key)=>{
        return localStorage.getItem(prefix+key)
    }
    return {
        StorageSetter:StorageSetter,
        StorageGetter:StorageGetter
    }
})()

export { readerStorage }