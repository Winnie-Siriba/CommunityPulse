
# Community Plus

A community reporting platform that helps users report, track, and resolve issues in their neighborhoods.

## Features

- 🏠 Browse Home Page: Welcome users with an introduction to the app's mission
- 📝 Submit Reports: Report community issues using a user-friendly form
- 📋 View All Reports: Browse all community reports in an interactive feed
- ✅ Mark as Resolved: Update report status when issues are fixed
- 🔍 View Resolved Reports: Celebrate positive changes in your community
- 🧭 Navigation: Easy-to-use navbar for moving through the app
- 🔎 Search and Filter: Find specific reports by location or category

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the JSON server for the backend (open a new terminal):
   ```
   npx json-server --watch db.json --port 3000
   ```
   Or alternatively:
   ```
   node server.js
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Tech Stack

- React with JavaScript
- React Router for navigation
- JSON Server for mock backend
- Tailwind CSS and Shadcn UI for styling

## Pages

- `/` - Home page with introduction and mission
- `/report` - Form to submit new community reports
- `/all-reports` - View all submitted reports
- `/resolved` - View only resolved community issues

## Data Model

Reports have the following structure:
```
{
  id: number,
  location: string,
  description: string,
  imageUrl?: string,
  category: string,
  resolved: boolean,
  createdAt: string
}
```
