# Baileys API

An implementation of [@whiskeysockets/Baileys](https://github.com/whiskeysockets/Baileys) as a simple RESTful API service with multiple device support. This project implements both **Multi-Device** client so that you can choose and use one of them easily.

## Requirements

-   **NodeJS** version **14.5.0** or higher.

## Installation

1. Download or clone this repo.
2. Enter to the project directory.
3. Install the dependencies.

## `.env` Configurations

```env
# Listening Host
HOST=127.0.0.1

# Listening Port
PORT=8000

# Maximum Reconnect Attempts
MAX_RETRIES=5

# Reconnect Interval (in Milliseconds)
RECONNECT_INTERVAL=5000
```

## Usage

1. You can start the app by executing `npm run start` or `node .`.
2. Now the endpoint should be available according to your environment variable configurations. Default is at `http://localhost:8000`.

Also check out the `examples` directory for the basic usage examples.

## API Docs

The API documentation is available online [here](https://documenter.getpostman.com/view/9471522/2s8YehTwHJ). You can also import the **Postman Collection File** `(postman_collection.json)` into your Postman App alternatively.

The server will respond in following JSON format:

```javascript
{
    success: true|false, // bool
    message: "", // string
    data: {}|[] // object or array of object
}
```

##  Available Features
At this moment we are working to bring more functionalities
### Sessions
    * Find Session
    * Session Status
    * List Sessions
	* Create New Session
        => QR method (Default)
        => Pairing Code method
	* Delete Session
### Chats
    * Get Chat List
    * Get Conversation
    * Forward Message
    * Send Presence Update
    * Read Message
    * Send  Bulk Message
    * Send Message Types
        => Send Message Text
        => Send Message Image
        => Send Message Audio
        => Send Message Video
        => Send Message Document
        => Send Message Gif
        => Send Message Sticker
        => Send Message Contact
        => Send Message Location
        => Send Message React
        => Send Message List
        => Send Message Buttons
        => Send Message Template
        => Send Message How To Forward
### Groups
    * Get Chat List
    * Get Conversation
    * Get Group Metadata
    * Create Group
    * Group Update Participants
    * Group Update Subject
    * Group Update Description
    * Group Update Settings
    * Group Get Invite Code
    * Group Join Invite Code
    * Group Revoke Invite Code
    * Group Update Picture
    * Group List Without Participants
### Misc
    * Update Profile Status
    * Update Profile Name
    * Update Progile Image (NEW)
    * Get My Profile {name, phote, status} (NEW)
    * Get Profile User (NEW)
    * Block And Unblock User (NEW)

### Webhook
    * Global webhook
## Known Issue

Currently there's no known issues. If you find any, please kindly open a new one.

## Notes

-   The app only provide a very simple validation, you may want to implement your own.
-   When sending message, your `message` property will not be validated, so make sure you sent the right data!
-   There's no authentication, you may want to implement your own.
-   The **Beta Multi-Device** client use provided Baileys's `makeInMemoryStore` method which will store your data in memory and a json file, you may want to use a better data management.
-   Automatically reading incoming messages is now disabled by default. Uncomment `whatsapp.js:91-105` to enable this behaviour.
-   If you have problems when deploying on **CPanel** or any other similar hosting, transpiling your code into **CommonJS** should fix the problems.

## Notice

This project is intended for learning purpose only, don't use it for spamming or any activities that's prohibited by **WhatsApp**.
