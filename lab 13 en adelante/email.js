// Require:
var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient("0530a80f-f4e0-4115-9702-b1d6292dd7ba");

client.sendEmail({
    "From": "a01751827@tec.mx",
    "To": "a01751827@tec.mx",
    "Subject": "Hello from Postmark",
    "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
    "TextBody": "Hello from Postmark!",
    "MessageStream": "outbound"
});