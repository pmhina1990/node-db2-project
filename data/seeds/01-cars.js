// STRETCH
const cars =[
    {
        vin: 'JA3AY11A82U020534',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '3GCEC14X66G218202',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
        
    },
    {
        vin: '1JTJHA31U940036422',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        
    },
]

exports.seed = async function(knex) {
   await knex('cars').truncate()
   await knex('cars').insert(cars)
    
}