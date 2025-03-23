const twilioService = require('../services/twilioService');
const openaiService = require('../services/openaiService');
const charmAnalyzer = require('../utils/charmAnalyzer');

class BotController {
    constructor(twilioService) {
        this.twilioService = twilioService;
    }

    async handleIncomingMessage(req, res) {
        const messageContent = req.body.Body;
        const senderNumber = req.body.From;

        const messageData = {
            content: messageContent,
            sender: senderNumber,
        };

        console.log('Received message:', messageData);

        try {
            const responseMessage = await openaiService.generateResponse(messageContent);
            await twilioService.sendMessage(senderNumber, responseMessage);

            const analysis = await charmAnalyzer.analyzeMessage(messageContent);
            console.log('Charm Analysis:', analysis);

            res.status(200).send('Message received and response sent');
        } catch (error) {
            res.status(500).send('Error processing message');
        }
    }

    processMessage(message) {
        // Logic to process the incoming message and generate a response
        return `You said: ${message.body}`;
    }

    sendMessage(to, message) {
        return this.twilioService.sendWhatsAppMessage(to, message);
    }
}

export default BotController;