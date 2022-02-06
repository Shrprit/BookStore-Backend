    
function success  (code , data){

    return {
        code : code,
        data : data,
        status : 'Success'
        
    }

}

function successMsg(code , msg){

    return {
        code : code,
        msg : data,
        status : 'Success'
    }
}

module.exports = {
    success,
    successMsg
}