#!/bin/bash -v

set -e

# Build Ionic App for Android
cordova platform add android --nofetch

# if [[ "$TRAVIS_BRANCH" == "develop" ]]
# then
    cordova build android
# else
#     cordova build android --prod --release
# fi
