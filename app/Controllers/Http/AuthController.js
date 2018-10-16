'use strict';

const User = use('App/Models/User');

class AuthController {

    async index(){
        const Users = await User.query().select('id', 'username','email').fetch();
        return Users;
    }

    async register({ request }){
        const data = request.only(['username','email','password']);
        
        const user = await User.create(data);

        user['message'] = "User Created";

        return user;
    }
   

    async authenticate({ request, auth }){
        const { email, password } = request.all();

        const token = await auth.attempt(email,password);
        
        return token;
    }
}

module.exports = AuthController
