require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const channelId = process.env.SLACK_CHANNEL;

const axios = require("axios");

const message = "Hello from MyInternshipApp!";

async function sendMessage() {
  try {
    const response = await axios.post(
      "https://slack.com/api/chat.postMessage",
      {
        channel: channelId,
        text: message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      console.log(
        "Message sent successfully",
        JSON.stringify(response.data, null, 2)
      );
    } else {
      console.log("Error: Message not  sent successfully", response.data.error);
    }

    const timestamp = response.data.ts;
    console.log(timestamp);
    return timestamp;
  } catch (err) {
    console.error("Axios error", err.message);
  }
}

module.exports = sendMessage;
