Technologies Used: Vite, React, Html, TailwindCSS for custom CSS and mainly JavaScript.

# How to run ?
 1. yarn
 2. yarn run dev

# Not able to run ?
 here's my deployed link- https://user-yashbhajbhuje67.vercel.app/ to view.
 
# Explanation :
Navbar.jsx
 1. Get User button to display Users.jsx component
 2. Clear Screen button to hide Users.jsx component

App.jsx
 1. display useState to display User.jsx component.
 2. count useState, everytime user press Get User button in Navbar count get increased thus refreshing and Users.jsx get load again.
 3. Also, Clear Screen decrement count.
 
User.jsx
 1. App.jsx's count useState is passed to USer.jsx
 2. count is stored in useEffect whenever count is changed Users.jsx renders.
 3. When User.jsx is load 1sec Loading will be displayed.
 4. After Loading user data will be fetched from given api using axios.
 5. All the obtained data will be stored in Data useState.
 5. After receiving user data and stored in Data it will map through it and each data will be passed down to User.jsx.
