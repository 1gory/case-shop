/* eslint no-underscore-dangle: 0 */

export default url => (
  fetch(`/api/articles${url ? `/${url}` : ''}`, {
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
