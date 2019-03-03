'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds single test user to DB
    return queryInterface.bulkInsert('medications', [{
      family_group_id: 1,
      name: "Hydrocodone-Acetaminophen",
      description: "The medication is primarily used to treat mild to severe pain.",
      directions: "Take once a day, after eating.",
      expiration: "01-01-20",
      doctor: "Dr. Jones"
    }, {
      family_group_id: 1,
      name: "Generic Prilosec-Omeprazole",
      description: "An antacid prescribed for treating excess acid development in the stomach.",
      directions: "Take two times a day.",
      expiration: "01-01-20",
      doctor: "Dr. Jones"
    }, {
      family_group_id: 1,
      name: "Amoxicillin",
      description: "Antibiotic commonly prescribed to treat ear infections, pneumonia, skin and throat infections, Lyme disease, etc.",
      directions: "Take once every other day.",
      expiration: "01-01-20",
      doctor: "Dr. Jones"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('medications', null, {});
  }
};
