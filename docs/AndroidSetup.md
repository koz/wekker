## Setup for Android

### Install dependencies
You will need Node.js, React Native CLI and Android Studio to run this project. If you're using macOS you will also need Watchman.

```
brew install node
brew install watchman
npm i -g react-native-cli
brew cask install android-studio
```

### Setup Android Studio
When running Android Studio for the first time, choose `Custom` installation and check the following boxes:
- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`
- `Performance (Intel ® HAXM)` - macOS only

### Set up the enviroment variables
Add the following lines to your shell config file like `~/.profile`

```
export ANDROID_HOME=${HOME}/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

If you use fish shell add this to you `~/.config/fish/config.fish`:
```
set -gx ANDROID_HOME ~/Library/Android/sdk
set -gx PATH $ANDROID_HOME/tools $ANDROID_HOME/platform-tools $PATH
```

Use `source ~/.profile` to load the config into your shell.

### Install Android 6.0 SDK
Launch the SDK manager, you can do it from the terminal, with `android` if the enviroment variables are correctly setted.

> You can also launch it through Android Studio in:
> Appearance & Behavior → System Settings → Android SDK.

Under `Android 6.0` select the following packages:
- `SDK Platform`
- `Google APIs`
- `Intel x86 Atom_64 System Image`
- `Google APIs Intel x86 Atom_64 System Image`
- `Sources for Android SDK`

In `Tools` select these:
- `Android SDK Build-tools Rev. 23.0.3`
- `Android SDK Build-tools Rev. 23.0.1`

For `Extras` these ones:
- `Google Play Services`
- `Google Play Repository`

## Configuring one Android Virtual Device
Open the AVD Manager by running this command at terminal:
```
android avd
```
Select your AVD and click `Edit...`, or create a new one in `Create...`.

Choose any device you like from the list.

In target choose `Android 6.0 - API Level 23`, and for CPU/ABI `Google APIs Intel Atom (x86_64)`.

The rest of the options is of your own preferences.

Click in `Start...` to initialize the device.
