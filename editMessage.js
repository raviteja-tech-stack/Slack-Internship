require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const channelId = process.env.SLACK_CHANNEL;

const axios = require("axios");

const message = "Edited! Hello from MyInternshipApp! This is an update";

async function editMessage(timestamp) {
  try {
    const response = await axios.post(
      "https://slack.com/api/chat.update",
      {
        channel: channelId,
        ts: timestamp,
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
        "Message edited successfully",
        JSON.stringify(response.data, null, 2)
      );
    } else {
      console.log(
        "Error: Message not  edited successfully",
        response.data.error
      );
    }
  } catch (err) {
    console.error("Axios error", err.message);
  }
}

module.exports = editMessage;
