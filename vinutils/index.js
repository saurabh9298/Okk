// a module is nothing but javascript file or
//a folder with index.js in it.

module.exports.sleep=function(duration = 5000){
    const start=Date.now();    //millisecods from 01/01/1970 0:0:0
    while(Date.now() <= (start+duration));    
}

module.exports.executeAfterDelay=function(CallbackFunction, delay=1000){
    if(typeof CallbackFunction !== 'function'){
        throw 'CallBack is not a function';
    }
    if(typeof delay !== 'number'){
        throw 'Delay/duration must be a number';
    }
    module.exports.sleep(delay);
    CallbackFunction();
}