// Load Pyodide
async function initPyodide() {
  try {
    return await loadPyodide({
      indexURL: './pyodide/',
      stdout: (text) => console.log(text),
      stderr: (text) => console.error(text)
    });
  } catch (error) {
    console.error('Pyodide loading error:', error);
    throw error;
  }
}

// Run Python code using Pyodide
async function runPythonCode() {
  const pyodide = await initPyodide();

  // Updated Python code with WebSocket test
  const pythonCode = `
def calculate_fibonacci(n):
    if n <= 0:
        return "Please enter a positive number"
    elif n == 1 or n == 2:
        return 1
    
    fib = [1, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib[n-1]

result = calculate_fibonacci(10)
result
  `;

  const result = await pyodide.runPythonAsync(pythonCode);
  
  // Create WebSocket connection
  const ws = new WebSocket('ws://localhost:8069');
  
  ws.onopen = () => {
    // Send the Python result to the server
    ws.send(`Python/WASM Result: ${result}`);
  };

  ws.onmessage = (event) => {
    console.log('Received from server:', event.data);
    document.getElementById('output').textContent = event.data;
  };
}

// Update to trigger on button click instead of automatic execution
document.getElementById('runWASM').addEventListener('click', runPythonCode);
