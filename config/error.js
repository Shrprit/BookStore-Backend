



function error  (code , msg){

    return {
        code : code,
        message : msg,
        status : 'Failure'
        
    }

}

module.exports = {
    error
}