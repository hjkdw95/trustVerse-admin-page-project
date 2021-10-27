import useDashBoardArr from './useDashBoardArr';

it('defaultArr가 들어오면 각각의 key와 value별로 배열을 반환한다', () => {
  const basicArr = [
    {
      appname: 'mars',
      user_count: 19,
    },
    {
      appname: 'masterkey',
      user_count: 21,
    },
    {
      appname: 'jupiter',
      user_count: 1,
    },
    {
      appname: 'canvas',
      user_count: 5,
    },
    {
      appname: 'canvas_appraisal',
      user_count: 0,
    },
    {
      appname: 'Undefined',
      user_count: 0,
    },
  ];
  const actualObj = useDashBoardArr(basicArr, 'appname', 'user_count');
  const expectedObj = {
    AllKeyArr: [
      'mars',
      'masterkey',
      'jupiter',
      'canvas',
      'canvas_appraisal',
      'Others',
    ],
    ArrValues: [19, 21, 1, 5, 0, 0],
  };

  expect(actualObj).toStrictEqual(expectedObj);
});
