# Python Web Extension with Pyodide

This extension allows you to run Python code in your browser using Pyodide.

![image](https://github.com/user-attachments/assets/7fbe7fe9-a358-4a9e-a6a6-8bc6446880c7)

 ![image](https://github.com/user-attachments/assets/4d781cae-2d74-47a3-a285-467e369c51ca)  ![image](https://github.com/user-attachments/assets/37e1001e-b3d0-414e-82c9-6d02b994b6ee)




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
4. Start the development server:   ```
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
