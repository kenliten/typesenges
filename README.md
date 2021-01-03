# Typesenges
------------

A challenges collection from [RosettaCode](https://rosettacode.org), [Martyr2's Mega Project List](https://www.dreamincode.net/forums/topic/78802-martyr2s-mega-project-ideas-list/), [Karan Projects](https://github.com/karan/Projects) and some other sources, solved with typescript.

## Run locally
--------------

### Requirements

1. Nodejs & npm installed

### Install dependencies

1. In a terminal:
```bash
$ npm install
```

### Build

1. In a terminal:
```bash
$ npm run build
```
    The code will be compiled to ES5 (commonjs) and saved in `dist/`

### Test

1. In a terminal:
```bash
$ npm test
```

## Challenges
-------------

### Strings

#### Reverse a String

##### Description

The task is pretty simple: given a string (or a number), return it reversed.

##### Implementation

To reverse a string, I take a string to reverse and follow these steps:

1. Split the string to create an array
2. Reverse the array with the `Array.prototype.reverse()` method
3. Join the reversed array in a string, and
4. return the reversed string

To see the ***implementation***, go to `src/lib/reverser`.

### Algorithms

#### 100 Doors

##### Description

The description for this challenges is [here](rosettacode.org/wiki/100_doors).

##### Implementation

My implementation includes an interface Door which is a simple object with two properties, `id` and `open`.

With this interface I:

1. create an array with 100 of them.
2. iterate over it with two nested for loops, one to hold a count and one to perform the open toggle.
3. in each iteration, ask if the deeper loop index is divisible by the outer one.
4. in that case, toggle the door's state.
5. to return just the open doors, use a filter with `a => a.open`.

## Contributing

You can clone this repository, open an issue or [email me](mailto:otonielreyesgalay@gmail.com), to help grow this project.
