# polish-utils 🇵🇱 🛠

## Getting started

Depending on the package manager, add `polish-utils` to your project: 

```bash
npm i -S polish-utils
```

or

```bash
yarn add polish-utils
```

## About

I wrote this library because I needed a clean solution for extracting data and validating polish identification numbers such as PESEL.

This library is written in TypeScript and covered with tests.

## Usage

### PESEL

`PESEL` is a class that accepts a PESEL string in a constructor

#### Properties

| Property         | Type                                        | Description                                                                                               |
|------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| isValid          | `boolean`                                   | Entry string must have exactly 11 numerical characters, last character must match the calculated checksum |
| getGender()      | <code>male &#124; female &#124; null</code> | Null if unable to determine 10th character                                                                |
| getDateOfBirth() | <code>Date &#124; null</code>               | Null if unable to determine first 6 characters                                                            |


#### Code

```ts
import { PESEL } from 'polish-utils'

const pesel = new PESEL('87111111111')

pesel.isValid // true
pesel.getGender() // "male"
pesel.getDateOfBirth() // Date object: Wed Nov 11 1987 00:00:00 GMT+0100 (Central European Standard Time)
```

## Contributing

Feel free to contribute to this repo. All you need to do is the following:

1. fork and checkout the repo
1. install dependencies
    ```bash
   yarn
    ```
1. develop (please adjust to the repo's code style 🙏)
    ```bash
   yarn lint 
   ```
1. write tests, run tests
    ```bash
   yarn test 
   ```
1. if you want to build the package, run
    ```bash
   yarn build 
   ```