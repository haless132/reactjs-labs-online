import './Box.scss';
import PropTypes from 'prop-types';

const sizeMap = {
  small: '40px',
  medium: '60px',
  large: '80px',
};

function Box({ box, onClick }) {
  const { color = 'black', luckyNumber, size = 'medium' } = box;
  const height = sizeMap[size];
  const handleRemoveClick = () => {
    if (onClick) onClick(box);
  };

  return (
    <div className="box" style={{ backgroundColor: color, height }}>
      {luckyNumber}

      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

// học thuộc nhé!
Box.propTypes = {
  // color: PropTypes.string,
  // luckyNumber: PropTypes.number.isRequired,
  // size: PropTypes.string,
  box: PropTypes.object,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  // color: 'black',
  // size: 'medium',
  box: {},
  onClick: null,
};
export default Box;
// propTypes
// defaultProps
