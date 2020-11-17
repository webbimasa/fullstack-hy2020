const dummy = (blogs) => {
    return (blogs) ? 1 : 0
}
const totalLikes = (blogs) => {
    const totalAmount = blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)
    return totalAmount
}

module.exports = {
    dummy,
    totalLikes
}