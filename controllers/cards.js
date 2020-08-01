const Card = require('../models/card');

module.exports.getAllCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка в обработке GET-запроса списка всех карточек' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  // const ownerId = req.user._id; // внимание, в данной итерации id пользовалея захаркоден в app.js

  // теперь в owner записывается инфа из токена, добавляемая в req.user._id
  Card.create({ name, link, owner: req.user._id })
    .then((newCard) => res.send({ data: newCard }))
    .catch((err) => res.status(400).send({ message: err.message }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove({ _id: req.params.id, owner: req.user._id }) // удалить сможет только owner
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: `Card with id ${req.params.cardId} was not found, or you don't have permission to delete it` });
      }
      return res.send({ message: 'Эта карточка успешно удалена:', data: card });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
