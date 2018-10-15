'use strict'

const Instructor = use('App/Models/Instructor');


class InstructorController {

    async index () {
        const Instructors = await Instructor.query().with('user').fetch();
        
        return Instructors;
    } 


    async store( { request } ) {
        const data = request.only(['user_id']);
        const instructor = await Instructor.create(data);

        return instructor;
    }
}

module.exports = InstructorController
