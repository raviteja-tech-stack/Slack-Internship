# Slack-Internship

This project demonstrates Slack API messaging operations using Node.js.  
It is part of my internship at Site Galleria Pvt. Ltd.

## Features

- Send a message to a Slack channel
- Edit an existing message
- Delete a message
- Retrieve messages from a channel
- Schedule a message for future delivery

## Getting Started

### Prerequisites

- Node.js installed
- A Slack workspace and bot token

### Installation

1. Clone the repository:
```bash
git clone <repo-URL>
cd <repo-folder>

2.Install dependencies:
npm install

3. Create a .env file with your Slack credentials:
SLACK_BOT_TOKEN=your-bot-token
SLACK_CHANNEL_ID=your-channel-id

4. Run the app:
node app.js

Notes
.env is ignored in GitHub for security
Example .env is provided as .env.example
