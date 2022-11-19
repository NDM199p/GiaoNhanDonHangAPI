const db = require("../../db/models");

class PriceServiceService {
  calculator = (packageObject) => {
    let { weight } = packageObject;
    return weight * 50;
  };

  getPriceServiceModel() {
    return db.PriceService;
  }

  getPriceServiceDBObject() {
    return db.PriceService;
  }

  async save(priceServiceObject) {
    db.PriceService.save();
  }

  async remove(id) {
    return await db.PriceService.destroy({
      where: {
        id,
      },
    });
  }

  async findAll() {
    let result = await db.PriceService.findAll();
    return result;
  }

  async findById(priceServiceId) {
    let result = await db.PriceService.findOne({ where: { id: priceServiceId } });
    if (!result) throw new NotFoundError("Not Found PriceService by priceServiceId");
    return result;
  }

  async update(id, priceServiceObject) {
    return await db.PriceService.update(priceServiceObject, { where: { id } });
  }
}

module.exports = PriceServiceService;

class ResponeData {
  constructor(name, code, data) {
    this.name = name;
    this.code = code;
    this.data = data;
  }
}

class CreatedResponeData extends ResponeData {}
