# Simple Chat Application

A full-stack chat application built with Next.js (client) and Node.js (server).

## Project Structure

```
simple-chat/
├── client/          # Next.js frontend application
│   ├── app/         # Next.js app directory
│   ├── components/  # React components
│   ├── assets/      # Static assets
│   └── ...
└── server/          # Node.js backend server
    └── server.js    # Express server
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd simple-chat
   ```

2. Install dependencies for both client and server:

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

### Running the Application

1. In a new terminal, start the client:

   ```bash
   cd client
   npm run dev
   ```

2. Start the server:

   ```bash
   cd server
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`
