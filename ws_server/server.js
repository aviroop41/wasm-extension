const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8069 });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        
        // Check if the message is from our Python/WASM computation
        if (message.toString().includes('Python/WASM Result:')) {
            // Echo back with confirmation
            const response = `Server received WASM computation: ${message}`;
            ws.send(response);
        }
    });
});

console.log('WebSocket server running on ws://localhost:8069');
