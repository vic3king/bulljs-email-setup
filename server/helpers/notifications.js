import emailService from '../config/emailSetup';
import sendMailQueue from '../config/bullConfig';
import template from './template';

/**
 *
 * @param {*} emailTo
 * @param {*} link
 * @param {*} name
 * @returns {*} sends an email to a new user
 */
const registrationEmail = (emailTo, link, name) => {
  const subject = 'Welcome to Bull';
  const body = `<p>Dear ${name},</p>
  <p>We are thrilled to have you.</p>
  <p>Some random message with link</p>
      <a href="${link}" class="button">Confirm email</a>`;
  const message = template(subject, body, emailTo);

  const options = {
    attempts: 2,
  };
  const data = { emailTo, subject, message };

  // Producer: adds jobs to que, in this case emails to be sent out upon signup
  sendMailQueue.add(data, options);
};

// Consumer: this gets called each time the producer receives a new email.
sendMailQueue.process(async job => {
  emailService.mailSender(job.data);
});

const Notifications = { registrationEmail };

export default Notifications;
