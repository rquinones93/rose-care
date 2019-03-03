'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{    
      email: 'robert@email.com',
      name: 'Robert Quinones',
      password: '$2b$10$ibD40J0qyELcNm5IABoHW.HQA0l4OewhMMoTsxFVBko6aFUQIO42q',
      profile_picture: '',
      type: "Family",
      family_group_id: 1
    }, {    
      email: 'tommy@email.com',
      name: 'Tommy Tran',
      password: '$2b$10$ibD40J0qyELcNm5IABoHW.HQA0l4OewhMMoTsxFVBko6aFUQIO42q',
      profile_picture: '',
      type: "Family",
      family_group_id: 1
    }, {
      email: 'peter@email.com',
      name: 'Peter Malolepszy',
      password: '$2b$10$ibD40J0qyELcNm5IABoHW.HQA0l4OewhMMoTsxFVBko6aFUQIO42q',
      profile_picture: '',
      type: "Professional Caregiver",
      family_group_id: 1,
      job_title: 'Caregiver',
      company: 'Care Inc.',
      years_experience: 5,
      certifications: ["CPR"]
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('users', null, {});
  }
};
