const mongodb = {
    username: "papyrus_admin_user_name",
    password: "sM5rXfti6ur9xKHh",
    databaseName: "papyrus"
};

module.exports = {

    // Environment Variables
    env: {
        mongodbURL: `mongodb+srv://${mongodb.username}:${mongodb.password}@cluster0.bynuf.mongodb.net/${mongodb.databaseName}?retryWrites=true&w=majority`,
        bcryptSecret: "",
        jwtSecret: "48033da7-cd64-44f2-a730-f80ae4849004"
    }
}