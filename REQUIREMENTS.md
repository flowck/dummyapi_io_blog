Problem statement
You have to create a web application to visualize the list of current users and their associated posts in the platform.
Requirements

- Create a responsive UI that works in both mobile and desktop browsers
- Pages must be shareable (e.g. you can share a link to a particular user’s posts or to a
  particular user’s details)
- Consider the following (with as much or as little detail you consider appropriate)
  - Automated testing
  - Loading states
  - Empty states
  - Error states
  - Offline experience
- The web application must have the following pages:

### UsersList

- It shows a list of current users
- The list must be paginated
- For each user it must show the following
  - Name and thumbnail
  - A button to show the full user profile
  - A button to show the user’s posts
  - The total number of posts created by that user

### PostsByUserList

- It shows the list of posts created by the user
- The list must be paginated
- It must show the user’s name at the top of the page
- For each post it must show the following
  - Title/Content
  - Image
  - List of tags
  - The latest 2 comments
  - Total of comments the post has
- It must show all tags used by the user
- Tags must be clickable and navigate to PostsByTagList page

### PostsByTagList

- It shows the list of posts with the current tag
- The list must be paginated
- It must show the tag at the top of the page
- For each post it must show the following
  - Title/Content
  - Image
  - Name of the user who created it
  - List of tags
  - Total of comments the post has
- The name of the user must be clickable and must display the user’s profile

## API

For this exercise you can use this [demo API](https://dummyapi.io/explorer). It is free to use but it requires creating an account and creating an application id which is explained [here, in the documentation area](https://dummyapi.io/docs). It is not required for you to create any extra testing data.
