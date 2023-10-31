# Stefan Markup Language

## Download
```shell
npm i stefan-prompt-language
```

## What it does

The langauge takes a .stefan markup file and it can take values inside javascript/typescript and parse them to a string.

## Example

JavaScript/TypeScript:

```typescript
const result = stefan.parse(inputString, ['Welcome back,', 'as you can see, 1'])
```

.stefan file:

```.stefan
${greeting} and today we will explore 
the world of typescript

${1.a.100} is the first number.
$${
console.log('Hello, World!')
}$$
```

Output:

```
Welcome back, and today we will explore
the world of typescript

as you can see, 1 is the first number.

Hello, World!
```

## Syntax

### `${}`

It is used to indicate where to place values inside the text.
use the example above to learn how to use it.

### ``$${}$$``

This syntax can process JavaScript code, just place the code inside the brackets and it will work

### Warning:

You cannot do something with ${} since i used that for my language, you just got to figure out a different method. 

${} has been reserved for .stefan files in .stefan files

## JavaScript Code coverage:

Base JavaScript support up to 30% - 40% ±10%

Node.js: supported (theoretically can execute all node.js code but needs packages installed)
JavaScript Code Execution is not the main feature and likely shoudn't be used in code, stick to the parse method
