'use strict';
module.exports = (sequelize, DataTypes) => {
  var feedbacks_answer = sequelize.define('feedbacks_answer', {
    feedback_id: DataTypes.UUID,
    content: DataTypes.TEXT,
    decathlon_members_id: DataTypes.UUID,
    parent_id: DataTypes.UUID
  }, {
    underscored: true,
  });
  feedbacks_answer.associate = function(models) {
    feedbacks_answer.belongsTo(models.feedbacks);
    feedbacks_answer.belongsTo(models.decathlon_members);
    feedbacks_answer.belongsTo(models.feedbacks_answer);
    // associations can be defined here
  };
  return feedbacks_answer;
};
