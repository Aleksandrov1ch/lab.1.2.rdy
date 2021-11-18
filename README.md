# task1
##  CaesarCipher CLI tool

## Run app

```
$ git clone https://github.com/Aleksandrov1ch/lab.1.2.rdy.git
```

```
$ cd nodeTask1
```

```
$ npm i
```

### Usage example:

CLI tool accept 3 options (short alias and full name):

1.  -i, --input: an input file
2.  -o, --output: an output file
3.  -a, --action: an action complete

CaesarCipher input.txt to output.txt:

```
$ node cli -i "./input.txt" -o "./output.txt" -a caesarCipher
```

CaesarCipher stdin to stdout:

```
$ node caesar -a delete
```
```
For action CaesarCipher need enter text through ":" , for example:  
1. ([1,2], [1]) // -> [2]
2. ([1,2,2,2,3], [2]) // -> [1,3]
