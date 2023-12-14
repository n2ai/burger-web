const dateConverstion = (dateString)=>{
    let convertedArray = dateString.split("-") 
    let sqlString = convertedArray[1] + "-" + convertedArray[2] + "-" + convertedArray[0]
    return sqlString
}

module.exports = {dateConverstion}
