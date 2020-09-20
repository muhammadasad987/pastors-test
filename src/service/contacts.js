import { axiosAuth } from './config';

const getContacts = params => {
  const { page, countryId, query } = params;
  return axiosAuth
    .get('/contacts.json', {
      params: {
        companyId: 171,
        page,
        countryId: countryId || '',
        query,
      },
    })
    .then(response => {
      if (response && response.data) {
        return response.data;
      }
      return null;
    })
    .catch(error => {
      throw error;
    });
};

export { getContacts };
