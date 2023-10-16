const Role = require('../../models/Role');
module.exports = async () =>{

    try {
        const adminRole = new Role({ name: 'Manager' });
        const clientRole = new Role({ name: 'Client' });
        const deliveryRole = new Role({ name: 'Delivery' });
    
        // await Role.insertMany([
        //     { name: 'Manager' },
        //     { name: 'Client' },            
        //     { name: 'Delivery' }
        // ])
        // console.log("inserted");
        await adminRole.save();
        await clientRole.save();
        await deliveryRole.save();
    } catch (error) {
        console.error(error);
    }
}
