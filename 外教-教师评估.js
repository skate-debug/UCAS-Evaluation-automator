// 1. Fill in your 2 specific text box comments for the teacher
const comments = [
    "What I like most about the teacher is that their lectures are well-organized and highlight the key points, making complex concepts easy to understand and helping us grasp them effortlessly.",
    "I hope the teacher can add more classroom interaction in the future, giving more students the opportunity to speak and express their ideas."
];

const textAreas = document.querySelectorAll('textarea');
textAreas.forEach((box, index) => {
    // Only fill the box if we have a comment for it
    if (comments[index]) {
        box.value = comments[index];
        // This makes sure the website registers that text was typed
        box.dispatchEvent(new Event('input', { bubbles: true }));
        box.dispatchEvent(new Event('change', { bubbles: true }));
    }
});

// 2. Select "Very consistent/Very satisfied" for all bubbles
// This groups the radio buttons by row and clicks the very first one in every row
const radioGroups = {};
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    if (!radioGroups[radio.name]) {
        radioGroups[radio.name] = [];
    }
    radioGroups[radio.name].push(radio);
});

for (const groupName in radioGroups) {
    if (radioGroups[groupName].length > 0) {
        radioGroups[groupName][0].click();
    }
}

console.log("✅ Teacher evaluation filled! Bubbles selected and text inserted. Please enter the verification code and submit.");