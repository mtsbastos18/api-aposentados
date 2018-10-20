'use strict'

const Associate = use('App/Models/Associate');

class AssociateController {
    async index(){
        const Associates = await Associate.query().fetch();
        
        return Associates;
    }

    async store ({ request }){
        const data = request.only(['nome','cpf']);
        data['status'] = 1
        const associate  = await Associate.create(data);

        return associate;
    }

    async  show ({ params }){
        const associate = Associate.findOrFail(params.id);
        return associate;
    }
}

module.exports = AssociateController
