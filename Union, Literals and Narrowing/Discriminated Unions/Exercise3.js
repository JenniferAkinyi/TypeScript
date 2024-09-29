"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            return [
                'error',
                // Imagine some improved error handling here
                'An error occurred',
            ];
        }
        const data = await response.json();
        return ['success', data];
    }
    catch (error) {
        return ['error', 'An error occurred'];
    }
}
async function exampleFunc() {
    const [status, value] = await fetchData();
    if (status === 'success') {
        console.log(value);
    }
    else {
        console.error(value);
    }
}
