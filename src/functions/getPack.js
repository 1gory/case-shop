/* eslint no-underscore-dangle: 0 */

export default packName => (
  fetch(`/api/pack/${packName}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then(async (response) => {
    const responseData = await response.json();

    return responseData.result;
  }).catch((e) => {
    console.log(e);
  })
);
