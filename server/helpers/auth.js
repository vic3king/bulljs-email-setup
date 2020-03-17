import jwt from 'jsonwebtoken';

const authHelper = {
  /**
   * @method encode
   * @description
   * @param {dataObject} data to be encoded
   * @returns {token} encoded user token
   */
  encode: data => {
    const secret = process.env.SECRETKEY;
    const token = jwt.sign(data, secret, { expiresIn: '72h' });
    return token;
  },
};

export default authHelper;
