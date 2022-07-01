# newsLaundry

This is a simple react native app created with respect to the assessment given by the News Laundry Team.

For reference, go through the following

 Build a small multi page app using React Native with a header, bottom navigation bar and that can handle nested routes.

	- The app should have authentication, you can use firebase and implement Google Login. When logging in, a token should be set in the device's localstorage and cleared when logged out. You can use FireStore db for storing user’s account details. The user should be able to see it and edit if they want (ex. Name, Phone number, DOB, Gender etc.) by visiting the user profile page.
	- When authenticated, the user can enter the app and browse posts. You can use this API and build an initial screen or a landing page. When clicking on any story, the story detail page should open with the whole story. You can use this API by passing in the appropriate story slug.
	- Navigation should be handled properly. You can use any navigation library (like React navigation or React Native navigation or anything of your choice). The header should have a back button and when clicked on, should take the user to the last visited page.
	- The Get stories by slug API also has a key called “linked-stories” with other stories linked in it. Do include that in the story details page and when clicked on it, should open that particular story.
