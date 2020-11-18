import './Box.scss';
import PropTypes from 'prop-types';

const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '80px',
};

function Box(props) {
  const { color, luckyNumber, size } = props;
  const height = sizeMap[size];

  return (
    <div className="box" style={{ backgroundColor: color, height }}>
      {luckyNumber}
    </div>
  );
}

// học thuộc nhé!
Box.propTypes = {
  color: PropTypes.string,
  luckyNumber: PropTypes.number.isRequired,
  size: PropTypes.string,
};

Box.defaultProps = {
  color: 'black',
  size: 'medium',
};
export default Box;
// propTypes
// defaultProps
