# University Evaluation Automator

A collection of JavaScript snippets designed to automate the repetitive process of filling out university course and teacher evaluations. 

By executing these scripts directly in the browser's developer console, students can instantly populate multiple text areas with predefined feedback, select standard multiple-choice answers, and fill "satisfaction" bubbles, saving time and ensuring consistent responses.

## Features

* **Auto-Fill Text Areas:** Injects predefined paragraphs sequentially into multiple `textarea` fields.
* **Auto-Select Radio Buttons:** Groups radio buttons by row and automatically selects the first option (e.g., "Very Satisfied", "Strongly Agree").
* **Auto-Select Checkboxes:** Targets and clicks specific multiple-choice answers based on their index.
* **Event Dispatching:** Triggers native browser input events so modern web frameworks properly register the injected text.

## Included Scripts

1. `course_eval_full.js` - Fills out standard course evaluations including text areas, radio bubbles, and specific checkbox selections.
2. `teacher_eval.js` - A streamlined script for teacher-specific evaluations, auto-filling text paragraphs and satisfaction radio buttons.
*(Note: Update this list to match the exact names of your 4 specific files)*

## Usage Instructions

1. Open the university evaluation portal in Safari, Chrome, or Firefox.
2. Navigate to the specific evaluation form you want to fill out.
3. Open your browser's Developer Tools:
   * **Safari (Mac):** `Option + Command + C`
   * **Chrome (Mac):** `Option + Command + J`
   * **Chrome/Edge (Windows):** `Ctrl + Shift + J`
4. Ensure you are on the **Console** tab.
5. Copy the contents of the appropriate `.js` file, paste it into the console prompt, and press **Enter**.
6. **Important:** Manually enter any required CAPTCHA or verification codes at the bottom of the page and click Submit.

## Customization

You can easily modify the scripts to fit your specific needs:
* Edit the strings inside the `comments` array to change the text injected into the text boxes.
* Adjust the `choicesToClick` array in the multiple-choice section to change which checkboxes are selected (0 = A, 1 = B, etc.).

## Disclaimer

These scripts are intended for personal workflow automation. Please ensure that the automated responses accurately reflect your honest feedback regarding the course and instructor before submitting.
