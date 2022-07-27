//this file associates the table creations together

const User = require('./User');
const Post = require('./Post');
const { unsubscribe } = require('../routes');

// create associations here (like the constraints)
User.hasMany(Post, {
    foreignKey: 'user_id'
})
//inverse association here
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User };
