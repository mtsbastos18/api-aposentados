'use strict'

const Model = use('Model')

class Instructor extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Instructor
