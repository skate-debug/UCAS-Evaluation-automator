// 1. Fill in your 5 specific text box comments
const comments = [
    "我最喜欢老师的授课方式，讲解深入浅出，逻辑清晰，能将复杂的知识点拆解成易于理解的内容，课堂氛围也非常轻松活跃，让我对这门学科产生了浓厚的兴趣。",
    "整体而言，这门课程已经非常优秀，无论是教学内容还是教学方式都很出色。",
    "5-8小时，包括上课时间、完成课后作业和简单复习。",
    "非常感兴趣：我在选课之前就对这个学科领域有浓厚的兴趣，一直希望能够系统地学习相关知识。",
    "非常高，我每次课都准时出勤。课堂上积极思考。"
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
const choicesToClick = [0, 1, 2, 3, 4, 5]; // 0 is A, 1 is B, etc... 5 is F.

choicesToClick.forEach(index => {
    if (checkboxes[index] && !checkboxes[index].checked) {
        checkboxes[index].click();
    }
});

console.log("✅ Evaluation form filled! Please enter your 4-letter verification code and submit.");