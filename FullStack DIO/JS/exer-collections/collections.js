const userRoles = new Map();



function getAdmins(users){

    const admins = [];

    // for(let user of users){
    //     for(let role of user){
    //         if(role === 'ADMIN'){
    //             admins.push(user);
    //         }
    //     }
    // }

    //Resposta correnta:
    for(let [key, value] of users){
        if(value === 'ADMIN'){
            admins.push(key);
        }
    }


    return admins;
}

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));
// console.log(userRoles.keys());
// console.log();
// console.log(userRoles.entries());
// console.log();
// console.log(userRoles.values());