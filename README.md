# 🌊 Dynamic Planet: Oceanography Quiz App

A comprehensive practice quiz application for Science Olympiad's **Dynamic Planet: Oceanography** event at the State level.

![Quiz App Preview](https://img.shields.io/badge/Science%20Olympiad-2026-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- **65+ Questions** covering all 8 official topic areas
- **Multiple question types**: Multiple Choice, Short Answer, Long Answer, Data/Diagram
- **Difficulty levels**: Easy, Medium, Tough, Extra Hard
- **Timed quiz mode** with competition-style 50-minute timer
- **Topic filtering** to focus on specific areas
- **Score tracking** with local storage persistence
- **Weak area identification** based on your performance history
- **Detailed explanations** for every question
- **Review mode** to learn from mistakes
- **Mobile-responsive design**

## Topic Coverage

The app covers all official Science Olympiad 2026 topics:

| Topic | Code | Description |
|-------|------|-------------|
| Seawater Properties | a | Temperature, salinity, pressure, density, nutrients |
| Surface Circulation | b | Currents, Coriolis, Ekman transport, eddies |
| Large-Scale Circulation | c | Thermohaline circulation, water masses |
| Waves | d | Wind waves, tsunamis, storm surge, wave properties |
| Tides | e | Diurnal, semidiurnal, spring/neap, resonance |
| Coastal Features | f | Estuaries, erosion, reefs, upwelling |
| Geological Oceanography | g | Seafloor features, tectonics, sediments |
| Climate Variability | h | ENSO, PDO, SAM, acidification |

## Quick Start

### Option 1: Run Locally
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start practicing!

### Option 2: Deploy to GitHub Pages (Free Hosting)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Oceanography Quiz App"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/oceanography-quiz.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your app will be live at: `https://YOUR_USERNAME.github.io/oceanography-quiz/`

### Option 3: Deploy to Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag the entire `oceanography-quiz-app` folder onto the Netlify dashboard
3. Your site is live instantly!

## How to Use

### Taking a Quiz
1. **Configure settings**: Choose number of questions, difficulty, topics
2. **Enable/disable timer**: Simulate competition conditions
3. **Answer questions**: Navigate with Next/Previous or click question bubbles
4. **Flag questions**: Mark questions to review later
5. **Submit**: Get instant results and detailed feedback

### Reviewing Answers
- Click **Review Answers** to see explanations
- Filter by **Incorrect Only** to focus on mistakes
- Study the **detailed explanations** for each question

### Tracking Progress
- **Best Score**: Your highest quiz percentage
- **Average Score**: Your overall average
- **Weak Areas**: Topics where you score below 70%

## File Structure

```
oceanography-quiz-app/
├── index.html      # Main HTML structure
├── styles.css      # All styling
├── questions.js    # Question database (65+ questions)
├── app.js          # Application logic
└── README.md       # This file
```

## Adding More Questions

Edit `questions.js` to add questions. Each question needs:

```javascript
{
    id: 66,  // Unique ID
    topic: "seawater",  // One of 8 topic codes
    topicName: "Seawater Properties",  // Display name
    difficulty: "medium",  // easy, medium, tough, extra-hard
    type: "mc",  // mc, short, long, data
    question: "Your question text here",
    options: [  // For MC only
        { label: "A", text: "Option A" },
        { label: "B", text: "Option B" },
        { label: "C", text: "Option C" },
        { label: "D", text: "Option D" }
    ],
    correctAnswer: "B",  // For MC: letter; For text: key answer
    acceptableAnswers: ["keyword1", "keyword2"],  // Optional: for text answers
    explanation: "Detailed explanation of the answer"
}
```

## Study Tips

1. **Start with All Topics** to identify weak areas
2. **Focus practice** on your weakest topics
3. **Use timed mode** to build test-taking stamina
4. **Review explanations** even for correct answers
5. **Retake quizzes** on weak topics until you score 80%+

## Competition Prep Schedule

| Days Before | Activity |
|-------------|----------|
| 7 days | Full 40-question diagnostic quiz |
| 5-6 days | Focus on 2 weakest topics |
| 3-4 days | Mixed practice, all difficulties |
| 1-2 days | Extra Hard questions only |
| Night before | Light review, get good sleep! |

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Credits

Questions based on:
- Science Olympiad 2026 Official Rules
- Study materials from various invitationals
- Standard oceanography curriculum

## License

MIT License - Feel free to use, modify, and share!

---

**Good luck at States! 🏆🌊**

*Questions or issues? The explanations in this app are based on standard oceanography principles and official Science Olympiad content.*
