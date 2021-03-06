const User = require('../models/user');
const Role = require('../models/role');

function deletePassword(data){
    return(
      data.map( item => {
        item.password = "undefined"
    }))

}
function getUsers(callback) {
    User.find({}, (allUsersListErrors, allUsersList) => {
        deletePassword(allUsersList);
        console.log(allUsersList);
        callback && callback(allUsersListErrors, allUsersList);
    });
}

function getUser(user, callback) {
    User.findOne(user, (userFindingError, foundUser) => {
        callback && callback(userFindingError, foundUser);
    });
}

function getUserById(user_id, callback){
    User.findOne({ _id:user_id }, (gottenUserErrors, gottenUser) => {
        callback && callback(gottenUserErrors, gottenUser);
    });
}

function createUser(user, callback) {
    const userFull = user;
    Role.find({ role_name: 'user' }, (defaultRoleErrors, defaultRole) => {
        if (defaultRole.length === 0) {
            Role.create({ role_name: 'user' }, (createdDefaultRoleErrors, createdDefaultRole) => {
                    userFull.role_id = createdDefaultRole._id;
                    User.create(userFull, (createdUserErrors, createdUser) => {
                        callback && callback(createdUserErrors, createdUser);
                    });
                }
            )
        }
        else {
            Role.findOne({ role_name: 'user' }, (defaultRoleErrors, defaultRole1) => {
                userFull.role_id = defaultRole1._id;
                User.create(userFull, (createdUserErrors, createdUser) => {
                    callback && callback(createdUserErrors, createdUser);
                });
            })
        }
    });
}

module.exports = { getUsers, getUser, getUserById, createUser };
