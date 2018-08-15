export const request = async (url, data = {}) => {
  try {
    const response = await fetch(url, data);
    return await response.json();
  } catch (err) {
    error(err);
    return { error: err };
  }
};
