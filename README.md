# Expo Linking API Android Deep Link Event Listener Failure

This repository demonstrates a bug in the Expo `Linking` API on Android where the `Linking.addEventListener` callback may not fire when a deep link is tapped while the app is already open.  This can lead to unexpected behavior and missed navigation actions.

## Bug Description

When the application is in the foreground and a deep link is launched (e.g., a user taps a link that should open the app to a specific screen), the `Linking.addEventListener` callback does not always trigger as expected. This makes handling deep links unreliably in the active app.

## Reproduction Steps

1. Clone this repository.
2. Run the app on an Android device or emulator using Expo Go.
3. Open the app.
4. From a browser or another app, tap a deep link intended to open a specific screen within the app.
5. Observe that the expected screen might not be displayed, indicating the event listener's failure to execute.

## Solution

The provided solution demonstrates a workaround to improve the reliability of capturing deep links even when the app is already open. It uses a combination of `Linking.addEventListener` and a check in the `componentDidMount` lifecycle method to handle potential initial links.