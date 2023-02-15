const addUniqID = (arrData) =>
  arrData.map((item) => {
    const id = Math.random().toString(16).slice(2);
    return {
      id,
      ...item
    };
  });

export default addUniqID;
