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
f"The 10th Fibonacci number is: {result}"
  `;

  const result = await pyodide.runPythonAsync(pythonCode);
  
  // Connect to the background script
  const port = chrome.runtime.connect();
  
  // Send the result to the background script
  port.postMessage({
    type: 'sendMessage',
    data: `Python/WASM Result: ${result}`
  });
  
  // Listen for responses
  port.onMessage.addListener((response) => {
    document.getElementById('output').textContent = response;
  });
}

// Update to trigger on button click instead of automatic execution
document.getElementById('runWASM').addEventListener('click', runPythonCode);
