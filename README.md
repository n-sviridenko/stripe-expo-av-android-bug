# Expo Android bug with video sound

Prerequisites:

1. nodejs (v12)
2. yarn
3. expo CLI
4. Android Studio

Steps to reproduce:

1. The video link is expirable. So first of all update the test video URL (in [`App.js`](https://github.com/n-sviridenko/stripe-expo-av-android-bug/blob/f8336ce2824bb6c6b720a2e941c25fcadf41ca30/App.js#L9)). You can take a sample URL from [here](http://savevideo.me/de/) (just enter `https://vimeo.com/258283603` in the search box). Example of a video URL: https://vod-progressive.akamaized.net/exp=1589027341~acl=%2A%2F947458957.mp4%2A~hmac=25b24307b7f9c21703a1d8b4409b2a19c99ac9b2864766282d983cc5818fa33d/vimeo-prod-skyfire-std-us/01/1656/10/258283603/947458957.mp4
2. `git checkout stripe-fix`
3. `yarn start`
4. Run the project in Android Studio on emulator
5. The video won't appear (it won't appear on a real device either)
6. `git checkout master` (ensure you reimported Gradle project and cleared cache)
7. The video is back
