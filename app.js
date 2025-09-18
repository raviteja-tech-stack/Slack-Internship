require("dotenv").config();

const sendMessage = require("./sendMessage.js");
const editMessage = require("./editMessage.js");
const deleteMessage = require("./deleteMessage.js");
const scheduleMessage = require("./scheduleMessage.js");
const getMessages = require("./getMessage.js");

async function runFlow() {
  try {
    console.log("Starting Slack Flow...");

    // 1. Send
    const timestamp = await sendMessage();
    if (!timestamp) {
      console.log(" Could not send message. Stopping flow.");
      return;
    }

    // 2. Edit
    try {
      await editMessage(timestamp);
      console.log(" Message edited");
    } catch (err) {
      console.error(" Edit failed:", err.message);
    }

    // 3. Retrieve
    try {
      await getMessages();
      console.log(" Messages retrieved");
    } catch (err) {
      console.error(" Retrieval failed:", err.message);
    }

    // 4. Delete
    try {
      await deleteMessage(timestamp);
      console.log(" Message deleted");
    } catch (err) {
      console.error(" Delete failed:", err.message);
    }

    // 5. Schedule
    try {
      await scheduleMessage();
      console.log(" Message scheduled");
    } catch (err) {
      console.error(" Scheduling failed:", err.message);
    }

    console.log(" Flow completed!");
  } catch (err) {
    console.error(" Unexpected error in runFlow:", err.message);
  }
}

runFlow();
