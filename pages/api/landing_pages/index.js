import axios from 'axios';

export default (req, res) => {
  const { body } = req;
  axios.post('https://mobile.clazbooks.com/api/landing_pages', body).then(
    response => {
      const { headers } = response;
      Object.keys(headers).forEach(key => {
        res.setHeader(key, headers[key]);
      });
      res.status(response.status).json(response.data);
    },
    err => {
      console.warn(err);
      if (err.response) {
        res.statusCode = err.response.status;
        res.end(
          JSON.stringify({
            data: err.response.data,
            headers: err.response.headers,
          })
        );
      }
    }
  );
};
