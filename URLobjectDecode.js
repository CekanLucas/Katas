/* To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
} */

const urlDecode = text => {
  let URLobj = {};
  const arr = text.replace(/(\%20)/g,' ').split(/[=&]/g);
  for (let i = 0; i < arr.length; i++) {
    URLobj[`${arr[i]}`] = arr[++i];
  }
  return URLobj;
};

console.log(
  '\n\t\t\tURL to decode:\nduck=rubber\nResult:\n',
  urlDecode("duck=rubber")
);
console.log(
  'bootcamp=Lighthouse%20Labs\n',
  urlDecode("bootcamp=Lighthouse%20Labs")
);
console.log(
  '\n\t\t\tURL to decode:\ncity=Vancouver&weather=lots%20of%20rain\nResult:\n',
  urlDecode("city=Vancouver&weather=lots%20of%20rain")
);
console.log(
  '\n\t\t\tURL to decode:\nurlDecode("city=Vancouver&weather=lots%20of%20rain").weather:\n',
  urlDecode("city=Vancouver&weather=lots%20of%20rain").weather
);