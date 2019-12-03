module.exports = function calculateRank(s) {
    const score = parseInt(s)
    console.log(score)
    switch (true) {
        case (score < 2800):
            console.log('Bronze')
            return 'Bronze'
        case (score >= 1200 && score < 2800):
            console.log('Silver')
            return 'Silver'
        case (score >= 2800 && score < 4800):
            console.log('Gold')
            return 'Gold'
        case (score >= 4800 && score < 7200):
            console.log('Platinum')
            return 'Platinum'
        case (score >= 7200 && score < 10000):
            console.log('Diamond')
            return 'Diamond'
        default:
            console.log('Predator')
            return 'Predator'
    }
}