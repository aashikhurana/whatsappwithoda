// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://whatsappdigitalassistant.herokuapp.com/bot/message';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'ODA_WEBHOOK_SECRET';

// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5cda2f657d26180010c43fce';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5d22a07b58da210011c1cae8';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || '8111cFgMHZVlvbduW75LVoiz05LucHGzOnjzzw5NF3iulZCXO9XdYUIaO0p3IcNDPWe_krYBSE-T8Pw-O9gzmw';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'lkYbkgrB6c2xbkYVleCmERAdeDVf9lhPyck3E1a9KRkBdF_GVMaTS1Cw_-X5KOZPAF-Ik0auPWO-TP28yAiOPg';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";