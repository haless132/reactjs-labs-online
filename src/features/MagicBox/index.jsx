import { useState } from 'react';
import BoxList from './component/BoxList';

const FAKE_DATA = [
  {
    color: 'goldenrod',
    luckyNumber: 1,
    size: 'small',
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

function MagicBoxFeature() {
  const [boxList, setBoxList] = useState(FAKE_DATA);

  const handleBoxCLick = (box, idx) => {
    // Remove box form list

    console.log(box, idx);
    const newBoxList = [...boxList];

    newBoxList.splice(idx, 1);

    setBoxList(newBoxList);
  };

  return (
    <div>
      <h2>MagicBox Feature</h2>

      <BoxList boxList={boxList} onBoxCLick={handleBoxCLick} />
    </div>
  );
}

export default MagicBoxFeature;
// Đây là hiện tượng Composition
