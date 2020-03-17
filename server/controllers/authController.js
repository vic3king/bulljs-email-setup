import dotenv from 'dotenv';
import { authService } from '../services/authService';
import authHelper from '../helpers/auth';

dotenv.config();
/**
 * @class AuthController
 */
export default class AuthController {
  /**
   * @method registerUser
   * @description registers a user with their email
   * @param {*} req
   * @param {*} res
   * @returns {object} registered user
   */
  static async registerUser(req, res) {
    try {
      const { body } = req;

      const user = await authService.create(body);

      const { id, email, isVerified, username } = user;
      const verificationToken = authHelper.encode({
        id,
        email,
        username,
        isVerified,
      });

      return res.status(200).send({
        status: true,
        token: verificationToken,
        user,
        message: `We've sent an email to ${email}. Follow the link in your email to verify your account`,
      });
    } catch (error) {
      return res.status(500).send({
        status: false,
        message: 'something went wrong',
        error,
      });
    }
  }
}
