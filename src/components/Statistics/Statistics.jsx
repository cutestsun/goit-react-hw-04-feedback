import PropTypes from 'prop-types';

export const Statistics = ({
  goodStat,
  neutralStat,
  badStat,
  options,
  total,
  positivePercentage,
}) => {
  const handleChooseOptValue = opt => {
    switch (opt) {
      case 'good':
        return goodStat;
      case 'neutral':
        return neutralStat;
      case 'bad':
        return badStat;
      default:
        return;
    }
  };

  return (
    <>
      {options.map(opt => (
        <p key={opt}>
          {opt}:{handleChooseOptValue(opt)}
        </p>
      ))}

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  goodStat: PropTypes.number.isRequired,
  neutralStat: PropTypes.number.isRequired,
  badStat: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
