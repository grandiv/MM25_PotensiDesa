const aosDuration = 600;
const aosDelay = 0;

const getDelay = ({ turn }) => {
  return (turn * aosDelay).toString();
};

module.exports = { aosDuration, getDelay };
