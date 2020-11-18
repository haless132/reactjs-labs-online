import Box from './component/Box';
import BoxList from './component/BoxList';

function MagicBoxFeature() {
  const box = {
    color: 'deeppink',
    luckyNumber: 10,
  };

  const boxList = [
    {
      color: 'goldenrod',
      luckyNumber: 1,
      size: 'small,',
    },
    {
      color: 'deeppink',
      luckyNumber: 2,
      size: 'medium',
    },
    {
      color: 'black',
      luckyNumber: 3,
      size: 'large',
    },
    {
      color: 'Red',
      luckyNumber: 4,
    },
    {
      color: 'green',
      luckyNumber: 5,
    },
  ];

  return (
    <div>
      <h2>MagicBox Feature</h2>

      <BoxList boxList={boxList} />
      {/* 
      <Box color="green" luckyNumber={11} />
      <Box color={box.color} luckyNumber={box.luckyNumber} />
      <Box luckyNumber={13} />
      <Box color="blue" luckyNumber={15} /> */}
    </div>
  );
}

export default MagicBoxFeature;
// Đây là hiện tượng Composition
