<h3>1. How to setup ?</h3>

**Step 1** : git clone this repo:

```
git clone https://github.com/chaunnt/Kiemdinhoto_AppWebview_TTDK.git
```

**Step 2:** cd to the cloned repo:

```
cd Kiemdinhoto_AppWebview_TTDK.git
```

**Step 3** : Install the Application with

```
yarn
```

**Step 4** : Install the library for IOS with Cocoa Pod

```
cd ./ios && pod install 
```
<h3>2. How to run App ?</h3>

**Step 1** : cd to the repo

**Step 2** :

For Android: run command
  ```
  yarn android
  ```
  or run directly on Android studio
  
For iOS: run command
  ```
  yarn ios
  ```
  or run directly on Xcode

<h3>3. How to run build release</h3>

**Android (APK)**

```
  cd android && ./gradlew assembleRelease
```

**Android (ABB)**

```
  cd android && ./gradlew bundleRelease
```

**iOS** : open Xcode, select Product -> Archive


<h3>4. version </h3>

<!-- // Info.plist -->
<key>CFBundleShortVersionString</key>
	<string>{version ++}</string>

 Keystore: file và pass là ttdk.com.vn


