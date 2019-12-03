module.exports = function searchByKey(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].metadata.key === value) {
            return arr[i]
        }
    }
    return {}
}