# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo SDK 49 App reproducer to demonstrate the performance difference between popular style libraries and react-native built-in styling.

### In each case we have rendered 1000 components with styling of each library. Result are average of 5 runs.

# Device: iPhone 14 (Simulator)

### Mounting a simple component

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 94  | 97  | 73  | 95  | 93  | 90  |
| gluestack-style   | 197 | 197 | 197 | 193 | 198 | 196 |
| Tamagui           | 216 | 216 | 217 | 216 | 217 | 216 |
| NativeBase        | 703 | 706 | 706 | 709 | 711 | 707 |
| Styled Components | 123 | 123 | 125 | 123 | 125 | 124 |

### Mounting a component with inline style

| Library           | 1    | 2    | 3    | 4    | 5    | avg  |
| ----------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| Native            | 96   | 97   | 97   | 96   | 97   | 97   |
| gluestack-style   | 212  | 212  | 211  | 212  | 211  | 212  |
| Tamagui           | 218  | 217  | 219  | 216  | 217  | 217  |
| NativeBase        | 1003 | 1004 | 1006 | 1010 | 1019 | 1008 |
| Styled Components | 137  | 135  | 136  | 135  | 136  | 136  |


### Component with variant

| Library           | 1   | 2   | 3   | 4   | 5   | avg |
| ----------------- | --- | --- | --- | --- | --- | --- |
| Native            | 95  | 94  | 96  | 95  | 95  | 95  |
| gluestack-style   | 202 | 215 | 220 | 214 | 214 | 213 |
| Tamagui           | 246 | 245 | 249 | 245 | 251 | 247 |
| NativeBase        | 834 | 828 | 833 | 833 | 830 | 832 |
| Styled Components | 138 | 141 | 141 | 141 | 140 | 140 |

### Complext styling

| Library           | 1    | 2    | 3    | 4    | 5    | avg  |
| ----------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| Native            | 245  | 246  | 245  | 245  | 244  | 245  |
| gluestack-style   | 461  | 454  | 456  | 451  | 458  | 456  |
| Tamagui           | 648  | 648  | 655  | 653  | 647  | 650  |
| NativeBase        | 1399 | 1402 | 1432 | 1410 | 1418 | 1412 |
| Styled Components | 299  | 298  | 297  | 297  | 300  | 298  |

### Layout using HStack, VStack, Image and Text

| Library         | 1   | 2   | 3   | 4   | 5   | avg |
| --------------- | --- | --- | --- | --- | --- | --- |
| Native          | 80  | 80  | 80  | 80  | 81  | 80  |
| gluestack-ui    | 192 | 192 | 193 | 195 | 193 | 193 |
| Tamagui         | 120 | 115 | 121 | 122 | 120 | 120 |
| NativeBase      | 722 | 726 | 731 | 723 | 729 | 726 |
 
