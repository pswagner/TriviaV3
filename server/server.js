const express = require('express')
const app = express()

// Mock trivia questions
const triviaQuestions = [
    { id: 1, question: 'What is the capital of France?', options: ['Paris', 'London', 'Rome', 'New York'], answer: 'Paris' },
    { id: 2, question: 'What is the largest planet in our Solar System?', options: ['Mars', 'Jupiter', 'Saturn', 'Earth'], answer: 'Jupiter' },
    { id: 3, question: 'Who wrote Romeo and Juliet?', options: ['William Shakespeare', 'Charles Dickens', 'J.K. Rowling', 'Mark Twain'], answer: 'William Shakespeare' }
];

// Route to get trivia questions
app.get('/api/questions', (req, res) => {
    res.json(triviaQuestions);
});

app.listen(5000, () => {
    console.log("Server started on port 5000")
});
