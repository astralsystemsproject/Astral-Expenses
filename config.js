// Astral Systems Expense Claims – settings.
// Edit THIS file only (you can do it straight on GitHub: open the file, click the pencil, edit, commit).
// Until the PASTE_ values are replaced the app runs in Demo mode (data stays in the browser).

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDe95mvTYbPZbJpB7Qgoq9ZNmsxIwrUWVY",
  authDomain: "astral-expenses.firebaseapp.com",
  projectId: "astral-expenses",
  storageBucket: "astral-expenses.firebasestorage.app",
  messagingSenderId: "210303254093",
  appId: "1:210303254093:web:68558d4182dd5d74926604"
};

// Microsoft 365 (Entra ID) Directory (tenant) ID – limits sign-in to Astral Systems.
window.AZURE_TENANT_ID = "1d4f47db-147c-46fc-9523-f2a99aa19f20";

// Extra safety: only emails ending like this may use the app.
window.ALLOWED_DOMAIN = "@astralsystems.com";

// Where receipts are kept:
//   "firestore" = free pilot (compressed photos kept in the database)
//   "storage"   = full version (needs Blaze plan + Storage)
//   "none"      = scan only, images not kept
window.ATTACHMENTS = "firestore";
