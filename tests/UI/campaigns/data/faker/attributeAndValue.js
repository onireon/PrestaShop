const faker = require('faker');

const {Attributes} = require('@data/demo/attributes');

const attributesNames = Object.values(Attributes).map(attribute => attribute.name);

const attributeTypes = ['Drop-down list', 'Radio buttons', 'Color or texture'];

/**
 * Create new attribute to use on attribute form on BO
 * @class
 */
class AttributeData {
  /**
   * Constructor for class AttributeData
   * @param attributeToCreate {Object} Could be used to force the value of some members
   */
  constructor(attributeToCreate = {}) {
    /** @member {string} Name of the attribute */
    this.name = attributeToCreate.name || faker.lorem.word();

    /** @member {string} Public name of the attribute */
    this.publicName = attributeToCreate.publicName || this.name;

    /** @member {string} Name used on the attribute URL */
    this.url = attributeToCreate.url || this.name.replace(/\s/gi, '-');

    /** @member {string} Attribute meta title */
    this.metaTitle = attributeToCreate.metaTitle || faker.lorem.word();

    /** @member {boolean} True for the attribute to be indexed */
    this.indexable = attributeToCreate.indexable === undefined ? true : attributeToCreate.indexable;

    /** @member {string} Type of the attribute 'Drop-down list'/'Radio buttons'/'Color or texture' */
    this.attributeType = attributeToCreate.attributeType || faker.random.arrayElement(attributeTypes);
  }
}

/**
 * Create new attribute value to use on attribute value form on BO
 * @class
 */
class ValueData {
  /**
   * Constructor for class ValueData
   * @param valueToCreate {Object} Could be used to force the value of some members
   */
  constructor(valueToCreate = {}) {
    /** @member {string} Name of the parent attribute */
    this.attributeName = valueToCreate.attributeName || faker.random.arrayElement(attributesNames);

    /** @member {string} Name of the value */
    this.value = valueToCreate.value || `${faker.lorem.word()}${faker.commerce.productMaterial()}`;

    /** @member {string} Name used on the value URL */
    this.url = valueToCreate.url || this.value.replace(/\s/gi, '-');

    /** @member {string} Attribute value meta title */
    this.metaTitle = valueToCreate.metaTitle || faker.lorem.word();

    /** @member {string} if the attribute type is color, hexadecimal value of the color */
    this.color = valueToCreate.color || faker.internet.color();

    /** @member {string} if the attribute type is texture, filename of the texture */
    this.textureFileName = valueToCreate.textureFileName || faker.system.commonFileName('txt');
  }
}

module.exports = {AttributeData, ValueData};
