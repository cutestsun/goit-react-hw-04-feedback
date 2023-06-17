import PropTypes from 'prop-types';

export const Statistics = ({ data, total, positivePercentage }) => {
  return (
    <>
      {Object.entries(data).map(item => (
        <p key={item[0]}>{item.join(': ')}</p>
      ))}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
