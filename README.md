# ng-template-forms-demo

A simple angular project demonstrating the use of Template Forms.

- Uses [Bootstrap 4.2.0](https://getbootstrap.com/docs/4.2/components/forms/)
- Explore [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/old/3.3.0/#/)
- Uses [PutsReq](https://putsreq.com/) to mock a POST API, with following responses

A. Success
```js
const parsedBody = JSON.stringify(request.body);
response.body = parsedBody;
```

B. Error
```js
response.status = 400;
```