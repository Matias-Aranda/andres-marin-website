Andrés Marín - SimRacing Coach Website
This is a modern website for Andrés Marín, a professional SimRacing coach. The site allows visitors to learn more about Andrés, book coaching sessions, and subscribe to a monthly membership for continuous support.

Built with:

Next.js

TypeScript

Tailwind CSS

Firebase

Features
📄 About section to get to know the coach

📅 Book private SimRacing classes

💳 Subscribe to a monthly membership for ongoing support

🔐 User authentication and account creation via Firebase

📨 Newsletter subscription for updates and tips

Work in Progress 🚧
This project is currently a work in progress and under active development. Some features may not be fully implemented or finalized yet.

Feedback and contributions are welcome!

Installation
Clone this repository:

bash
Copiar
Editar
git clone https://github.com/your-username/andres-marin-simracing.git
cd andres-marin-simracing
Install dependencies:

bash
Copiar
Editar
npm install
# or
yarn install
Configure Firebase:

Create a Firebase project.

Set up Authentication (Email/Password, Google, etc.).

Set up Firestore and any other required services.

Add your Firebase config to your .env.local:

env
Copiar
Editar
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
Run the development server:

bash
Copiar
Editar
npm run dev
# or
yarn dev
Visit http://localhost:3000 to view the site.

Deployment
You can deploy this project on platforms like Vercel or Netlify.

License
This project is licensed under the MIT License.
