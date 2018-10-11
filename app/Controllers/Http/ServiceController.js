'use strict';

const Service = use('App/Models/Service');

class ServiceController {

    async index(){
        const Services = await Service.query().fetch();

        return Services;
    }

    async store ({ request }) {
        const data = request.only(['service_name']);
        const service = await Service.create(data);

        return service;

    }

    async show ({ params }){
        const service = Service.findOrFail(params.id);

        return service;
    }
     
    /**
     * Remove the specified resource from storage.
     */
    async destroy(params, response) {
        const service = Service.findOrFail(params.id);

        await service.delete();

        
    }
    

}

module.exports = ServiceController
