# CodeShift Website Monorepo

This repository contains both the frontend and backend for the CodeShift project Website. The goal of CodeShift is to deliver a seamless coding assistant experience directly within your workflow, combining a smart UI with a powerful backend for intelligent code generation, editing, and analysis.

## Structure

- **Frontend/**: React app (UI, client) that serves as the user interface for interacting with the CodeShift assistant. It provides features like code editor integration, prompt input, response display, and contextual tools.
- **Backend/**: Server-side code (API, database, etc.) built using FastAPI. It handles prompt processing, communicates with the language model, manages sessions, and stores relevant data if needed.

## Getting Started

### Frontend
1. `cd Frontend`
2. `npm install` – Installs all dependencies listed in `package.json`.
3. `npm start` – Runs the development server on `http://localhost:3000`. The frontend will automatically reload on file changes.

### Backend
1. `cd Backend`
2. Follow the instructions in `Backend/Readme.txt` – This usually involves setting up a virtual environment, installing dependencies from `requirements.txt`, and running the FastAPI app using Uvicorn or Gunicorn.

## Notes
- Each folder contains its own README and setup instructions if needed. Make sure to review them for additional details on environment variables, API keys, or local testing configurations.
- Make sure to run `npm install` in each folder before starting development. Skipping this step might lead to missing module errors or build failures.
- For development, ensure the frontend and backend are both running concurrently. You may use tools like `concurrently` or a `dev` script if preferred.
- The backend API should typically run on `http://localhost:8000` unless specified otherwise. You may need to set up proxy configurations in the frontend (`package.json`) to forward API requests during local development.
- Contributions, improvements, and suggestions are welcome. This project is under active development, and feedback helps us build better tools for developers.

---

For any issues, don't hesitate to get in touch with the maintainer.
