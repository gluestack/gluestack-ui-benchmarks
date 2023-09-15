# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo SDK 49 App reproducer to demonstrate the performance difference between popular style libraries and react-native built-in styling.

### In each case we have rendered 1000 components with styling of each library. Results are average of 5 mounts.

# Device: iPhone 13

### Mounting a simple component

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 76  | 76  | 76  | 76  | 76  | 76  |
| gluestack-ui      | 158 | 151 | 152 | 153 | 152 | 153 |
| Tamagui           | 160 | 160 | 160 | 161 | 160 | 160 |
| NativeBase        | 526 | 530 | 531 | 527 | 530 | 529 |
| Styled Components | 91  | 91  | 92  | 91  | 91  | 91  |

### Component with variant

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 77  | 77  | 76  | 75  | 76  | 76  |
| gluestack-ui      | 164 | 163 | 166 | 164 | 163 | 164 |
| Tamagui           | 186 | 185 | 185 | 187 | 186 | 186 |
| NativeBase        | 663 | 665 | 666 | 665 | 669 | 666 |
| Styled Components | 103 | 102 | 103 | 103 | 104 | 103 |

### Mounting component with theme and inline style

| Library           | 1    | 2    | 3    | 4    | 5    | avg  |
| ----------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| Native            | 192  | 196  | 198  | 193  | 193  | 195  |
| gluestack-ui      | 390  | 392  | 396  | 397  | 398  | 395  |
| Tamagui           | 525  | 531  | 530  | 540  | 537  | 533  |
| NativeBase        | 1193 | 1200 | 1220 | 1214 | 1210 | 1207 |
| Styled Components | 236  | 238  | 238  | 244  | 240  | 239  |

### Layout using HStack, VStack, Image and Text

| Library      | 1   | 2   | 3   | 4   | 5   | avg |
| ------------ | --- | --- | --- | --- | --- | --- |
| Native       | 68  | 69  | 71  | 69  | 67  | 69  |
| gluestack-ui | 120 | 120 | 119 | 120 | 119 | 120 |
| Tamagui      | 89  | 93  | 90  | 88  | 90  | 90  |
| NativeBase   | 464 | 477 | 511 | 507 | 495 | 491 |

> These benchmarks were measured on 15th September, 2023.
