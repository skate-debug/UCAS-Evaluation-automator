// 1. Fill in your 5 specific text box comments
const comments = [
    "I really love the teacher’s teaching style. The explanations are clear and easy to follow, with a logical structure that breaks down complex concepts into simple, understandable parts.",
    "Overall, this course is already excellent, with outstanding content and teaching methods.",
    "5–8 hours, including class time, completing homework assignments, and a brief review.",
    "Very interested: I had a strong interest in this field even before selecting this course, and I’ve always wanted to study it systematically.",
    "Very high; I attend every class on time. I actively participate in class discussions."
];

const textAreas = document.querySelectorAll('textarea');
textAreas.forEach((box, index) => {
    if (comments[index]) {
        box.value = comments[index];
        // This makes sure the website registers that text was typed
        box.dispatchEvent(new Event('input', { bubbles: true }));
        box.dispatchEvent(new Event('change', { bubbles: true }));
    }
});

// 2. Select "Very satisfied" and "A" for all single choices
// This finds every group of radio buttons and clicks the very first one in each row
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

// 3. Select Multiple Choice (A, B, C, D, F)
// Assuming A=1st, B=2nd, C=3rd, D=4th, E=5th, F=6th box. 
// We skip the 5th box (E) and check the rest.
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const choicesToClick = [0, 1, 2, 3, 4,5]; // 0 is A, 1 is B, etc... 5 is F.

choicesToClick.forEach(index => {
    if (checkboxes[index] && !checkboxes[index].checked) {
        checkboxes[index].click();
    }
});

console.log("✅ Evaluation form filled! Please enter your 4-letter verification code and submit.");