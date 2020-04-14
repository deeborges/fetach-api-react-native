const headers = new Headers();

headers.append('Content-Type', 'image/jpeg');
headers.append('Accept-Encoding', 'deflate');
headers.append('Accept-Encoding', 'gzip');

headers.delete('Content-Type');

headers.get('Content-Type');
headers.get('Accept-Encoding');

headers.has('Content-Type');
headers.has('Accept-Encoding');

headers.set('Content-Type', 'text/html');

for(var key of headers.keys()) {
  console.log(key); 
}

for (var value of headers.values()) {
  console.log(value); 
}

export default headers;