import React, { useState } from 'react';

const useDashBoardArr = (defaultArr, keyName, valueName) => {
  const [arr, setArr] = useState(defaultArr);

  const ArrKeys = arr.map(key => key[keyName]);
  const ArrValues = arr.map(value => value[valueName]);

  const switchNull = arr => {
    const itemIndex = arr.indexOf('');
    if (itemIndex !== -1) {
      arr[itemIndex] = 'Others';
    }
    return arr;
  };

  const AllKeyArr = switchNull(ArrKeys);

  console.log(AllKeyArr);

  return { AllKeyArr, ArrValues };
};

export default useDashBoardArr;
