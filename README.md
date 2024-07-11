# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo SDK 51 App reproducer to demonstrate the performance difference between popular style libraries and react-native built-in styling.

### Expo QR Code
<img src="https://qr.expo.dev/eas-update?slug=exp&projectId=0d1f6201-7dbc-4f73-a953-c6a37b6cebe2&groupId=0e4e144d-83a0-47b9-b409-4f5e87c2d038" height="200" width="200" alt="Expo QR Code" />

## Installation

```
npm i
```

OR

```
yarn
```

## Usage

To start the project. Please run the following command in the project root.

```
npm run start-native-release-mode
```

OR

```
yarn start-native-release-mode
```

### In each case we have rendered 1000 components with styling of each library. Results are average of 5 mounts.

# Device: iPhone 15

### Mounting a simple component

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 69  | 66  | 68  | 69  | 69  | 68  |
| gluestack-ui v1   | 133 | 132 | 131 | 131 | 134 | 132 |
| gluestack-ui v2   | 98  | 99  | 99  | 100 | 98  | 99  |
| Tamagui           | 157 | 156 | 156 | 156 | 157 | 156 |
| NativeBase        | 315 | 316 | 316 | 314 | 315 | 315 |
| Styled Components | 72  | 72  | 72  | 71  | 72  | 72  |

### Component with variant

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 70  | 79  | 72  | 71  | 71  | 73  |
| gluestack-ui v1   | 146 | 146 | 145 | 145 | 147 | 146 |
| gluestack-ui v2   | 145 | 145 | 144 | 144 | 144 | 144 |
| Tamagui           | 187 | 187 | 189 | 188 | 192 | 189 |
| NativeBase        | 355 | 354 | 356 | 355 | 355 | 355 |
| Styled Components | 77  | 78  | 78  | 78  | 77  | 78  |

### Mounting component with theme and inline style

| Library         | 1   | 2   | 3   | 4   | 5   | avg |
| --------------- | --- | --- | --- | --- | --- | --- |
| gluestack-ui v1 | 361 | 362 | 362 | 362 | 354 | 360 |
| gluestack-ui v2 | 240 | 240 | 240 | 242 | 241 | 241 |
| Tamagui         | 386 | 387 | 387 | 388 | 387 | 387 |
| NativeBase      | 479 | 481 | 480 | 480 | 482 | 480 |

> React Native and Styled Components does not provide support for state styling out of the box.

### Layout using HStack, VStack, Image and Text

| Library         | 1   | 2   | 3   | 4   | 5   | avg |
| --------------- | --- | --- | --- | --- | --- | --- |
| Native          | 65  | 57  | 57  | 56  | 55  | 58  |
| gluestack-ui v1 | 91  | 89  | 84  | 90  | 89  | 89  |
| gluestack-ui v2 | 78  | 76  | 75  | 75  | 76  | 76  |
| Tamagui         | 74  | 71  | 69  | 69  | 69  | 70  |
| NativeBase      | 324 | 324 | 324 | 323 | 324 | 324 |

> These benchmarks were measured on 11th July, 2024.

## Created By GeekyAnts

GeekyAnts is a team of React Native experts who love open-source and solving developer problems. We’ve been working on React Native since 2015 and have designed and built React Native apps for almost 200+ clients across the globe. Our clients include startups to big enterprises! Need help with your React Native app?

[Contact Us](https://geekyants.com/?utm_source=gluestack-ui-home&utm_medium=home-page&utm_campaign=meet-the-creators)
