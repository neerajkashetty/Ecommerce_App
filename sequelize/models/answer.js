'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      question: { type: DataTypes.STRING, allowNull: false },
      answers: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
      selectedAnswer: { type: DataTypes.STRING, allowNull: false },
      beginning: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};