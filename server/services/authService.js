import models from '../database/models';
import BaseService from './baseService';

const { User } = models;

/**
 * @class AuthService
 */
export default class AuthService extends BaseService {
  /**
   * @constructor
   */
  constructor() {
    super(User);
  }
}

export const authService = new AuthService();
