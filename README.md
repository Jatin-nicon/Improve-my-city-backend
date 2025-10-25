# Backend (Firebase) — Improve My City

This folder contains small client-side helper modules for Firebase integration.
Files:
- firebaseConfig.js — place your Firebase web config here.
- firestore.js — convenience wrappers for Firestore operations.
- storage.js — convenience wrapper for Firebase Storage uploads.

Usage (client-side):
1. In your HTML pages include Firebase compat SDKs:
   <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-storage-compat.js"></script>

2. Include files (order matters):
   <script src="../backend/firebaseConfig.js"></script>
   <script src="../backend/firestore.js"></script>
   <script src="../backend/storage.js"></script>
   <script src="assets/app.js"></script>

3. Replace `firebaseConfig` object in firebaseConfig.js with your project's credentials.

Security notes:
- For production, prefer modular SDK and server-side operations for sensitive tasks.
- Configure Firestore Security Rules and Storage Rules to restrict access.
- Use Firebase Authentication to link users to complaints and enforce rules.

This README intentionally keeps things minimal — see official Firebase docs for deployment and security.
