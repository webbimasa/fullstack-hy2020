const dummy = (blogs) => {
    return (blogs) ? 1 : 0
}
const totalLikes = (blogs) => {
    const totalAmount = blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)
    return totalAmount
}
const mostLikes = (blogs) => {
    const mostLiked = blogs.reduce((prev, next) => {
        return (prev.likes > next.likes) ? prev : next
    }, {})
    return mostLiked
}

module.exports = {
    dummy,
    totalLikes,
    mostLikes,
}