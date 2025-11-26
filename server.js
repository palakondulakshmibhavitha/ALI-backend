// Simple backend server for ALI using Node.js + Express

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ----------------------------
// 1. TEST ROUTE
// ----------------------------
app.get('/', (req, res) => {
  res.json({ message: "ALI Backend Running Successfully!" });
});

// ----------------------------
// 2. SUBJECT-WISE CONTENT
// ----------------------------

const content = {
  english: {
    topics: ["Grammar Basics", "Vocabulary", "Reading Comprehension"],
    practiceQuestions: [
      "Identify the verb in this sentence: 'She runs fast'.",
      "Form a sentence using the word 'although'."
    ],
    studyPlan: [
      "Day 1: Parts of Speech",
      "Day 2: Vocabulary building",
      "Day 3: Reading practice"
    ]
  },
  maths: {
    topics: ["Algebra", "Geometry", "Trigonometry"],
    practiceQuestions: [
      "Solve: 2x + 4 = 10",
      "Find the area of a circle with radius 7"
    ],
    studyPlan: [
      "Day 1: Algebra basics",
      "Day 2: Geometry shapes",
      "Day 3: Trigonometric ratios"
    ]
  },
  science: {
    topics: ["Physics", "Chemistry", "Biology"],
    practiceQuestions: [
      "State Newton’s 3rd law of motion",
      "Define photosynthesis"
    ],
    studyPlan: [
      "Day 1: Physics fundamentals",
      "Day 2: Basic chemistry",
      "Day 3: Biology – cell structure"
    ]
  }
};

// ----------------------------
// 3. GET RECOMMENDED CONTENT
// ----------------------------
app.post('/recommend', (req, res) => {
  const { subject } = req.body;

  if (!subject || !content[subject]) {
    return res.status(400).json({ error: "Invalid subject" });
  }

  res.json({
    recommendedTopics: content[subject].topics,
    studyPlan: content[subject].studyPlan,
    practiceQuestions: content[subject].practiceQuestions
  });
});

// ----------------------------
// 4. START SERVER
// ----------------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
