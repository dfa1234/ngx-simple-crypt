## ngx-simple-crypt

Javascript module (compatible with any angular version, but not limited to angular) for encryption through XOR cipher method.

Useful for hiding non sensitive informations, like code obfuscations, QR code datas, etc...

### Import
```sh
npm i ngx-simple-crypt
```
or
```sh
yarn add ngx-simple-crypt
```

### Usage

No module import needed, you can use anywhere:

```javascript
import {SimpleCrypt} from "ngx-simple-crypt";
```

```javascript
let simpleCrypt = new SimpleCrypt();

let encodedString = simpleCrypt.encode("my-key","You are not supposed to read this");
console.log(encodedString);// "NBZYSwQLCFlDBBFZHgxdGwoKCB0NHwpZHxxMD0UNBRBe"

let decodedString = simpleCrypt.decode("my-key",encodedString);
console.log(decodedString);// "You are not supposed to read this"
```

You can also use the static methods for encoding/decoding Objects directly:

```javascript
let encodedObjectAsString:string = SimpleCrypt.encodeDefault("my-key", {data:'very important stuff'});
let object:{} = SimpleCrypt.decodeDefault("my-key", encodedObjectAsString);
```


From [wikipedia](https://en.wikipedia.org/wiki/XOR_cipher):    
*The XOR operator is extremely common as a component in more complex ciphers. By itself, using a constant repeating key, a simple XOR cipher can trivially be broken using frequency analysis. If the content of any message can be guessed or otherwise known then the key can be revealed. Its primary merit is that it is simple to implement, and that the XOR operation is computationally inexpensive. A simple repeating XOR (i.e. using the same key for xor operation on the whole data) cipher is therefore sometimes used for hiding information in cases where no particular security is required.*
