const twilio = require ('twilio');

const accountSid = 'AC15eedae6eb72acd060775a467771ed43';
const authToken= '8788ee6e1dc441f8eb31969aebaf44f9';

module.exports = new twilio.Twilio(accountSid, authToken);
