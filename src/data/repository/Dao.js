
class Dao {
    constructor(Type) {
        this.type = Type;
    }

    async create(object) {
        let value;
        const t = await this.type.sequelize.transaction();
        try {
            value = await this.type.create(object,{transaction: t});
            await t.commit();
        } catch (error) {
            await t.rollback();
            throw error;
        }
        return value.dataValues;
    }
    async update(object) {
        let value;
        const t = await this.type.sequelize.transaction();
        try {
            value = await this.type.update(object,{
                where:{
                    id: object.id
                }
            });
            await t.commit();
        } catch (error) {
            await t.rollback();
            throw error;
        }
        return (value[0] === 1);
    }
    async destroy(id) {
        let value;
        const t = await this.type.sequelize.transaction();
        try {
            value = await this.type.destroy({
                where:{
                    id,
                }
            });
            await t.commit();
        } catch (error) {
            await t.rollback();
            throw error;
        }
        return (value === 1);
    }
   async getAll() {
       let value = await this.type.findAll();
       return value.map(val => val.dataValues);
    }
    async getById(id) {
        let value = await this.type.findByPk(id);
        return value.dataValues;
    }
}
module.exports = {Dao};