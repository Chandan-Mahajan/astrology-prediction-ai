# astrology-prediction-ai
AI-based astrology prediction system

**Project Description**
This project is a web-based Astrology Prediction Website that collects user details through a frontend form and processes them using an automated workflow built with n8n. The workflow integrates an LLM API to generate astrology-based guidance and sends the prediction to the user via email.

The project demonstrates the complete lifecycle of a real-world application: frontend development, automation workflow design, AI integration, and deployment using GitHub Pages.

Project Architecture Overview
Frontend (HTML, CSS, JavaScript)
→ n8n Webhook (POST request)
→ LLM API (via HTTP Request node)
→ Email Service (Gmail node)
→ Response sent back to frontend


**Frontend to n8n Data Flow Explanation**
The user fills out the astrology form on the website.
On clicking “Get My Astrology Prediction”, JavaScript collects the form data.
The data is sent as a JSON payload to the n8n Webhook (Production URL) using a POST request.
The webhook triggers the n8n workflow.
The workflow forwards structured input to an LLM API using an HTTP Request node.
The generated astrology prediction is formatted.
The prediction is emailed to the user using the Gmail node.
A success response is returned to the frontend.

**AI Usage Explanation**
AI is used responsibly in this project:
The LLM is accessed only through the n8n workflow
The frontend does not directly call the AI model
AI is used for content generation, not decision-making
All prompts and inputs are structured and controlled
Cursor AI was used as a coding assistant, not for blind copy-pasting
All logic, validation, and workflow design were created with full understanding.

**Deployment Details**
Frontend Hosting: GitHub Pages
Automation Platform: n8n Cloud
Workflow Trigger: Webhook (Production URL)

**Links**

GitHub Repository:
(https://github.com/Chandan-Mahajan/astrology-prediction-ai)

Live Project URL:
https://chandan-mahajan.github.io/astrology-prediction-ai/

Author
Chandan Mahajan

Academic Integrity Declaration
This project is an original work created individually.
AI tools were used as assistants, not as replacements for understanding or development.
I am able to fully explain all parts of this project during evaluation.
