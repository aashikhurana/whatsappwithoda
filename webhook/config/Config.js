// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://botv2iad1I0225H0A2C1Dbots-mpaasocimt.botmxp.ocp.oraclecloud.com:443/connectors/v1/tenants/idcs-100b89d671b54afca3069fe360e4bad4/listeners/webhook/channels/c5510f9b-4ec4-4baa-b4aa-e87a883dc693';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'mrDUrrNh8tVj7eA6XTVxSnD5O2WYZj6M';

// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5d7b41ecaa6a4d0011ebd702';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5d9d4be856ded400109beaf6';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || '3BZzNFG0mTdGpyurvefl7Tj6Q6W6tzn19DiLxOY3eho3bf53npH3zs207mnEo1Ixh9-eCqvH3cq2eCbI3tsPuQ';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'TzcdTiXIm5l_SBpUumkTxZ04MyHwZCDEGpjnIMKcjMD19sSi9tXC__snLlWQG28nQMHFENlfe81xIcYHLXtdZg';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";