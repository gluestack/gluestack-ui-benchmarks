# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo SDK 49 App reproducer to demonstrate the performance difference between popular style libraries and react-native built-in styling.

### In each case we have rendered 1000 components with styling of each library. Results are average of 5 mounts.

# Device: iPhone 13

### Mounting a simple component

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 78  | 77  | 77  | 78  | 79  | 78  |
| gluestack-ui      | 158 | 155 | 157 | 154 | 156 | 156 |
| Tamagui           | 170 | 169 | 170 | 170 | 171 | 170 |
| NativeBase        | 526 | 530 | 531 | 527 | 530 | 529 |
| Styled Components | 95  | 94  | 94  | 94  | 95  | 94  |

### Component with variant

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 83  | 78  | 80  | 77  | 78  | 78  |
| gluestack-ui      | 174 | 169 | 169 | 168 | 169 | 170 |
| Tamagui           | 198 | 197 | 194 | 195 | 195 | 196 |
| NativeBase        | 620 | 621 | 624 | 609 | 621 | 619 |
| Styled Components | 105 | 107 | 104 | 105 | 107 | 106 |

### Mounting component with theme and inline style

| Library           | 1    | 2    | 3    | 4    | 5    | avg  |
| ----------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| gluestack-ui      | 361  | 359  | 356  | 359  | 357  | 358  |
| Tamagui           | 510  | 509  | 514  | 509  | 509  | 510  |
| NativeBase        | 1078 | 1072 | 1086 | 1073 | 1079 | 1078 |

> React Native and Styled Components does not provide support for state styling out of the box.

### Layout using HStack, VStack, Image and Text

| Library      | 1   | 2   | 3   | 4   | 5   | avg |
| ------------ | --- | --- | --- | --- | --- | --- |
| Native       | 68  | 69  | 71  | 69  | 67  | 69  |
| gluestack-ui | 120 | 120 | 119 | 120 | 119 | 120 |
| Tamagui      | 89  | 93  | 90  | 88  | 90  | 90  |
| NativeBase   | 464 | 477 | 511 | 507 | 495 | 491 |

> These benchmarks were measured on 12th October, 2023.
