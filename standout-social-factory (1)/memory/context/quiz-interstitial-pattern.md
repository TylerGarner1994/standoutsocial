# Quiz Interstitial Pattern

**Always include social proof/fact-based interstitial cards between select quiz questions.**

## What It Is
Between certain quiz questions, show a brief "stat card" interstitial that reinforces the pain point or builds credibility before the next question. These cards auto-dismiss after ~2 seconds and use a fade+scale animation.

## Placement Strategy
- Place interstitials after questions 1, 3, and 5 (or roughly every other question for 6-7 question quizzes)
- Never place after the final question (goes straight to results)
- Never place after back-to-back questions (space them out)

## Data Structure
```javascript
const interstitials = {
    1: {  // after question index 1
        icon: '📊',           // emoji icon
        stat: '62% of DTC brands',  // big stat headline
        text: 'still rely on spreadsheets past $10M in revenue, creating hidden operational drag that compounds monthly.',
        source: 'Source attribution here'
    },
    3: { icon: '💸', stat: '$847K per year', text: '...', source: '...' },
    5: { icon: '🏆', stat: '8-12 weeks', text: '...', source: '...' }
};
```

## Content Guidelines
- **Card 1 (after Q1):** Problem validation stat — reinforces that the pain is widespread
- **Card 2 (after Q3):** Cost/impact stat — quantifies the cost of inaction
- **Card 3 (after Q5):** Solution/hope stat — previews the positive outcome
- Stats should feel researched and credible (cite source)
- Text should be 1-2 sentences max

## CSS Pattern
```css
.interstitial-card {
    text-align: center;
    padding: 32px 24px;
    animation: fadeScale 0.3s ease-out forwards;
    opacity: 0;
}
.interstitial-icon { font-size: 40px; margin-bottom: 12px; }
.interstitial-stat { font-size: 36px; font-weight: 800; color: var(--primary-green); margin-bottom: 8px; line-height: 1.1; }
.interstitial-text { font-size: 15px; color: var(--text-secondary); line-height: 1.5; max-width: 380px; margin: 0 auto 12px; }
.interstitial-source { font-size: 11px; color: var(--text-muted); font-style: italic; }

@keyframes fadeScale {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
```

## JS Pattern
```javascript
function showInterstitial(data, callback) {
    isAnimating = true;
    // Hide validation message + buttons
    validationMessage.classList.remove('visible');
    // Slide out current question
    questionCard.classList.add('exit');
    setTimeout(() => {
        questionCard.classList.remove('exit');
        // Replace question card content with interstitial
        questionCard.innerHTML = `
            <div class="interstitial-card">
                <div class="interstitial-icon">${data.icon}</div>
                <div class="interstitial-stat">${data.stat}</div>
                <div class="interstitial-text">${data.text}</div>
                <div class="interstitial-source">${data.source}</div>
            </div>`;
        // Hide nav buttons during interstitial
        nextBtn.classList.remove('visible');
        backBtn.classList.remove('visible');
        // Auto-dismiss after 2 seconds
        setTimeout(() => {
            questionCard.classList.add('exit');
            setTimeout(() => {
                questionCard.classList.remove('exit');
                isAnimating = false;
                callback();  // renders next question
            }, 200);  // exit animation duration
        }, 2000);  // display duration
    }, 200);  // entry animation duration
}
```

## Integration with goToNext()
```javascript
function goToNext() {
    if (isAnimating) return;
    // ... validation checks ...
    const interstitial = interstitials[currentQuestion];
    if (interstitial) {
        showInterstitial(interstitial, () => {
            currentQuestion++;
            renderQuestion();
        });
    } else {
        // normal transition (no interstitial)
        // ...
    }
}
```

## Important: renderQuestion() Must Rebuild innerHTML
Since `showInterstitial()` replaces the question card's innerHTML with the interstitial content, `renderQuestion()` must rebuild the inner structure (question number, text, options grid) every time it's called, not just update existing elements.

## Timing Summary
- Question exit animation: 200ms
- Interstitial display: 2000ms
- Interstitial exit animation: 200ms
- Total interstitial duration: ~2400ms
- Normal question transition: 200ms
- Auto-advance after answer selection: 500ms
