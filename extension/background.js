let socket = null;

chrome.runtime.onInstalled.addListener(() => {
    // Establish WebSocket connection
    socket = new WebSocket('ws://localhost:8069');
    
    socket.onopen = () => {
        console.log('WebSocket connection established');
    };
    
    socket.onmessage = (event) => {
        console.log('Received message from server:', event.data);
    };
    
    socket.onerror = (error) => {
        console.log('WebSocket error:', error);
    };
});

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
        if (msg.type === 'sendMessage') {
            // Send message to the WebSocket server
            if (socket && socket.readyState === WebSocket.OPEN) {
                socket.send(msg.data);
            }
        }
    });
});
