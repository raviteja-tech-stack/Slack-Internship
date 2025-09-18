require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const channelId = process.env.SLACK_CHANNEL;

const axios = require("axios");

async function deleteMessage(timestamp) {
  try {
    const response = await axios.post(
      "https://slack.com/api/chat.delete",
      {
        channel: channelId,
        ts: timestamp,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.ok) {
      console.log(
        "Message deleted successfully",
        JSON.stringify(response.data, null, 2)
      );
    } else {
      console.log(
        "Error: Message not deleted successfully",
        response.data.error
      );
    }
  } catch (err) {
    console.error("Axios error", err.message);
  }
}

module.exports = deleteMessage;
