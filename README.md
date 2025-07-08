# SwiftAssignment Dashboard App

This project is a responsive front-end dashboard built using React and Tailwind CSS. It features a user profile screen and a comments dashboard, consuming data from public APIs. It demonstrates routing, pagination, sorting, search, and global state management using React Context.

## Features

- **Profile Screen**  
  - Fetches and displays the first user from the API  
  - Displays ID, name, email, address, and phone  
  - Profile data is stored in a global context  

- **Comments Dashboard**  
  - Fetches 500 comments from the API  
  - Custom pagination with options for 10 / 50 / 100 per page  
  - Partial search on name and email fields  
  - Clean, tabular layout using Tailwind CSS  

- **Global Header**  
  - Application name on the left  
  - User's initials and name on the right, from global context  

- **Routing**  
  - `/` - Comments Dashboard  
  - `/profile` - User Profile Screen  

## Technologies Used

- React (with Hooks)
- Tailwind CSS
- React Router DOM
- React Context API
- JSONPlaceholder API (for dummy data)

## Folder Structure

src/
├── App.js
├── DashboardContext.js
├── components/
│ ├── Header/
│ │ └── index.js
│ ├── ProfileScreen/
│ │ └── index.js
│ └── CommentsDashboard/
│ └── index.js


## Setup Instructions

1. Clone the repository  
   `git clone https://github.com/your-username/swift-dashboard.git`

2. Install dependencies  
   `npm install`

3. Start development server  
   `npm start`

4. View in browser  
   Open [http://localhost:3000](http://localhost:3000)

## API References

- **Users**: https://jsonplaceholder.typicode.com/users  
- **Comments**: https://jsonplaceholder.typicode.com/comments

## Notes

- All styles are handled using Tailwind CSS utility classes.
- State persistence is handled using React hooks; localStorage can be added for refresh-proof filters.
