const { celebrate, Joi, Segments } = require("celebrate");

module.exports = () => {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  });
};
