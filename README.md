# Python Web Extension with Pyodide

This extension allows you to run Python code in your browser using Pyodide.

![image](https://github.com/user-attachments/assets/4845c5ba-f465-46b6-b201-9e2380be6f63)

![image](https://github.com/user-attachments/assets/9d3fede8-2851-4026-8143-ecc2eb19b37f) ![image](https://github.com/user-attachments/assets/e0651998-c57a-4d98-b693-0dbad3cb230e)





## Setup Instructions

### 1. Setting up Pyodide

1. Visit the [Pyodide Releases page](https://github.com/pyodide/pyodide/releases)
2. Download the latest release (e.g., `pyodide-0.x.x.tar.gz`)
3. Extract the contents
4. Copy the extracted files to `extension/pyodide` directory in this project   ```bash
   mkdir -p extension/pyodide ```

### 2. Setting up the Node.js Server

1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Navigate to the WebSocket server directory:   ```
   cd ws_server   ```
3. Install dependencies:   ```
   npm install   ```
4. Update the WebSocket URL in `extension/config.js` for local development:   ```
   export const CONFIG = {
       WEBSOCKET_URL: 'ws://localhost:8069'
   };    ```
5. Start the development server:   ```
   node server.js   ```

### 3. Installing the Chrome Extension

1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `extension` folder from this project

## Usage

1. Pin the extension to your Chrome toolbar for easy access
2. Click the extension icon to open it
3. Press "Run Pyodide Code" and wait for the results to be fetched from the WebSocket Server
4. Results will be displayed in the extension popup

## Development

To monitor the application:
1. Check the WebSocket Server logs in your terminal to view:
   - Connection status
   - Client messages
   - Server responses
   - Any errors or debugging information

## License

Licensed under the [MIT Open License](https://opensource.org/licenses/MIT)
