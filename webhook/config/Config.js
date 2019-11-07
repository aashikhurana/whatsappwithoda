// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://botphx1I0014H76DC67bots-mpaasocimt.botmxp.ocp.oraclecloud.com:443/connectors/v1/tenants/idcs-100b89d671b54afca3069fe360e4bad4/listeners/webhook/channels/ae74af93-cf98-4645-8af1-1c7c1f0ab157';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'PMsQIg6EJN18yJSKehjs8abi0JQ84kQG';

// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5dc3944204f05100107a0ef8';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5dc395126b23dd0010246682';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || 'nPiCW3LRT0vLgPPKHgGbDGmRH4TUJSr8SsRt12AM8R9pEhJQL8yucwhKGdyuPDdJCAMx5KZBSN4r2TFi__0biQ';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'pv_eEdMDt9gUDzoBNGxtLlero6BHGfrEJDPKiLJf4CJ-Qq_stm_9DpRV1XZ2BL7e7aBtlp6PaFBo8jBbnOrzNQ';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";