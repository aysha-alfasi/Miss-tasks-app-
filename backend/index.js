const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Sentiment = require("sentiment");

const app = express();
const PORT = process.env.PORT || 5000;

// <♡  MiddleWare />
app.use(bodyParser.json());
app.use(cors());

// <♡  Initialize sentiment analysis />
const sentiment = new Sentiment();

// <♡  Post route to analayze sentiment />
app.post("/analyze-sentiment", async (req, res) => {
  const { text } = req.body; //  <♡ User text sent from the frontend

  if (!text || typeof text !== "string") {
    return res
      .status(400)
      .json({ error: "Text is required and must be a string.🥰" });
  }

  // <♡  Analyze the sentiment of the input text />
  const result = sentiment.analyze(text);

  // <♡ Check for special keywords and generate custom response />
  const responseMessage = generateResponseMessage(result.score, text);

  // <♡ Send the sentiment analysis result back to the frontend />
  res.json({
    sentiment: result, // <♡ Sentiment analysis result
    message: responseMessage, // <♡ Generate message based on sentiment score
  });
});

function generateResponseMessage(score, text) {
  // <♡ Keywords for different situations />
  const lowercasedText = text.toLowerCase();
  const positiveKeywords = ["completed ", "achieved", "finished", "progress"];
  const negativeKeywords = [
    "overwhelmed",
    "stressed",
    "anxious",
    "struggling",
    "behind",
    "tired",
    "didn't",
    "don't",
    "can't",
    "sad",
  ];

  // <♡ Array of possible phrases to check for />
  const phrases = [
    "how are you miss tasks!",
    "how are you doing",
    "how are you",
  ];

  const completeSentences = [
    "i completed all my tasks",
    "i finished my work",
    "i did everything i needed to do",
    "i have completed my tasks",
    "i finished everything on my to do list",
    "i finished my tasks",
    "i finished all my tasks",
    "i completed my tasks",
  ];

  // <♡ Check if the text includes positive or negative keywords />
  const hasPositiveKeyword = positiveKeywords.some((keyword) =>
    text.toLowerCase().includes(keyword)
  );
  const hasNegativeKeyword = negativeKeywords.some((keyword) =>
    text.toLowerCase().includes(keyword)
  );

  // <♡ responses />

  for (const phrase of phrases) {
    if (lowercasedText.includes(phrase)) {
      return "I’m doing great, thanks for asking! How about you? 😊";
    }
  }

  // <♡ Check if the input contains any of the phrases />

  for (const sentence of completeSentences) {
    if (lowercasedText.includes(sentence) && !hasNegativeKeyword) {
      return "Wow, awesome! You’ve completed everything! 🎉";
    }
  }

  for (const sentence of completeSentences) {
    if (lowercasedText.includes(sentence) && score < 0) {
      return "Wow, awesome! You’ve completed everything! 🎉, don't worry you will feel better";
    }
  }

  // <♡ Analyze sentiment score />

  if (hasPositiveKeyword && !hasNegativeKeyword && score > 0) {
    return "Awesome job! You’ve completed tasks and made great progress. Keep up the momentum!";
  } else if (hasPositiveKeyword) {
    return "Awesome job! You’ve completed tasks and made great progress. Keep up the momentum!";
  } else if (hasNegativeKeyword && score < 0) {
    return "It’s okay to feel stressed sometimes. Take a deep breath, and try breaking your tasks down into smaller steps. You’ll feel more in control!";
  } else if (hasPositiveKeyword && score < 0) {
    return "You’ve completed tasks, which is great! But don’t forget to take care of yourself. Balance is key!";
  } else if (hasNegativeKeyword && score > 0) {
    return "You’re making progress, but it’s important to acknowledge how you’re feeling. Don’t hesitate to take breaks and relax!";
  } else if (score > 0) {
    return "You’re doing great! Keep up the positive attitude and keep pushing forward!";
  } else if (score < 0) {
    return "Don’t give up! It’s normal to face challenges, but remember, every small step counts. You can do this!";
  } else {
    return "Stay focused! Prioritize your tasks and take it one step at a time.";
  }
}

// <♡  Start the server />
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
