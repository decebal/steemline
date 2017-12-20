# SteemLine

> Multifeed, Statistics and Notifications for Steem!

**Demo: https://steemline.markus-kottlaender.de**

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
*Note:
For any contribution consider this directory: https://github.com/vuejs/awesome-vue

# Planned Features

- Notifications for incoming votes, replies and mentions
- Follow/Unfollow
- Scheduled Posting
- Uploading images
- Voting Bot
- Profile/Follow Popups on usernames (also mentions in posts/comments)

# Known Bugs

- Sometimes the connection to steem can't be esteblished it seems.
- Sometimes the animations and line sorting are broken or break on the go.
- After up- or unvoting the vote state changes and flips back again once `updateAccount` is called (10 sec interval).
- Clicking the upvote button of a post far to the right (last 3 or sth.) the slider will scroll back to the first post on the left.
- Unfocussing the vote percentage dropdown makes the slider scroll right.
- Dragging doesn't work correclty in firefox.
- ...
