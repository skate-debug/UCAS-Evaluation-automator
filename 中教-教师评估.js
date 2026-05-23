// 1. Fill in your 2 specific text box comments for the teacher
const comments = [
    "我最喜欢老师讲课条理清晰、重点突出，能将复杂的知识点讲得通俗易懂，让我们很容易理解和掌握。",
    "希望老师以后可以适当增加一些课堂互动，让更多同学有机会发言和表达自己的想法。"
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