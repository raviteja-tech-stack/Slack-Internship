require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const channelId = process.env.SLACK_CHANNEL;

const axios = require("axios");

async function getMessages() {
  try {
    const response = await axios.get(
      "https://slack.com/api/conversations.history",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          channel: channelId,
          limit: 5, // fetch last 5 messages
        },
      }
    );

    if (response.data.ok) {
      console.log("Messages retrieved successfully:");
      response.data.messages.forEach((msg, i) => {
        console.log(`${i + 1}. [${msg.ts}] ${msg.text}`);
      });
    } else {
      console.log("Error retrieving messages:", response.data.error);
    }
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

module.exports = getMessages;
