import Box from './component/Box';
import BoxList from './component/BoxList';

function MagicBoxFeature() {
  const box = {
    color: 'goldenrod',
    luckyNumber: 12,
  };

  const boxList = [
    {
      color: 'goldenrod',
      luckyNumber: 1,
    },
    {
      color: 'deeppink',
      luckyNumber: 2,
    },
    {
      color: 'black',
      luckyNumber: 3,
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
      <Box color="green" luckyNumber={11} />
      <Box color={box.color} luckyNumber={box.luckyNumber} />
      <Box luckyNumber={13} />
      <Box color="blue" luckyNumber={15} />
    </div>
  );
}

export default MagicBoxFeature;
// Đây là hiện tượng Composition
