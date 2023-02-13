Technologies Used: Vite, React, Html, TailwindCSS for custom CSS and mainly JavaScript.

# How to run?
 1. yarn
 2. yarn run dev

# Not able to run?
 here's my deployed link- https://user-yashbhajbhuje67.vercel.app/ to view.
 
# Explanation :
Navbar.jsx
 1. Get User button to display Users.jsx component
 2. Clear Screen button to hide Users.jsx component

App.jsx
 1. display useState to display User.jsx component.
 2. count useState, every time the user presses the Get User button in the Navbar count gets increased thus refreshing and Users.jsx gets re-render.
 3. Also, Clear Screen decrement count.
 
Users.jsx
 1. App.jsx's count useState is passed to USer.jsx
 2. count is stored in useEffect whenever the count has changed Users.jsx renders.
 3. When User.jsx is load 1sec Loading will be displayed.
 4. After Loading user data will be fetched from the given api using Axios.
 5. All the obtained data will be stored in Data useState.
 5. After receiving user data and storing it in Data it will map through it and each data will be passed down to User.jsx.
 
User.jsx
 for css tailwind CSS is used.
 1. For Each data received from Users.jsx we will make a card (using css) and it will be displayed on the screen.
 
 Time Completion: 4hrs for Code.
 If you like it a star will be appreciated. 
