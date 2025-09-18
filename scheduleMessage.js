require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const channelId = process.env.SLACK_CHANNEL;
const axios = require("axios");

async function scheduleMsg() {
  try {
    const postAt = Math.floor(Date.now() / 1000) + 60;
    let response = await axios.post(
      "https://slack.com/api/chat.scheduleMessage",
      {
        channel: channelId,
        text: "This is a scheduled message from MyInternshipApp!",
        post_at: postAt,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.ok) {
      console.log("Message scheduled successfully", response.data);
    } else {
      console.log("Error scheduling message:", response.data.error);
    }
  } catch (err) {
    console.error("Axios error:", err.message);
  }
}

module.exports = scheduleMsg;
