const db = require("../sequelize/models");

const Answer = db.Answer

const newAnswer = async (req, res) => {
  const question = req.body.question;
  const selectedAnswer = req.body.selectedAnswer;
  const answers = req.body.answers;
  const userId = req.user.userId;
  const beggining = req.body.beggining

  try {
    if (!question && !selectedAnswer && !answers && !userId && !beggining) {
        res.json({success: false, message: "Missing parameters."})
    }

    const newAnswer = Answer.create({
      question,
      selectedAnswer,
      answers,
      userId,
      beggining,
    });

    if (newAnswer) {
        res.json({
          success: true,
          data: { question, selectedAnswer, beggining },
        });
    } else {
        res.json({success: false, message: "Something went wrong while creating new answer."})
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  newAnswer,
};
