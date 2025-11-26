// Simple backend server for ALI using Node.js + Express

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get('/', (req, res) => {
  res.json({ message: "ALI Backend Running Successfully!" });
});

// SUBJECT CONTENT
const content = {
  english: {
    topics: ["Grammar Basics", "Vocabulary", "Reading Comprehension"],
    studyPlan: [
      "Day 1: Grammar fundamentals",
      "Day 2: Vocabulary practice",
      "Day 3: Reading comprehension tasks"
    ],
    wrongAnswerHelp: "Review sentence structure and grammar rules.",
    practiceQuestions: [
      "What is a noun?",
      "Correct this sentence: He go to school.",
      "Define adjective with example."
    ]
  },

  maths: {
    topics: ["Algebra", "Geometry", "Arithmetic"],
    studyPlan: [
      "Day 1: Algebra basics",
      "Day 2: Arithmetic problems",
      "Day 3: Geometry concepts"
    ],
    wrongAnswerHelp: "Try breaking the problem into smaller steps.",
    practiceQuestions: [
      "2x + 5 = 11 → Find x",
      "Find the area of a circle with radius 5",
      "What is 25% of 240?"
    ]
  },

  science: {
    topics: ["Physics Basics", "Chemistry Basics", "Biology"],
    studyPlan: [
      "Day 1: Physics – Motion",
      "Day 2: Chemistry – Elements",
      "Day 3: Biology – Cells"
    ],
    wrongAnswerHelp: "Revise core definitions and diagrams.",
    practiceQuestions: [
      "Define Newton’s First Law.",
      "What is an atom?",
      "Explain photosynthesis."
    ]
  }
};

// API ENDPOINTS
app.get('/content/:subject', (req, res) => {
  const subject = req.params.subject.toLowerCase();
  if (content[subject]) {
    res.json(content[subject]);
  } else {
    res.status(404).json({ error: "Subject not found" });
  }
});

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port", port);
});
