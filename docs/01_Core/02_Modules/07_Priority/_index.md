Lưu trữ, truy xuất thông tin theo độ ưu tiên.

Kế thừa class `_.M.ContentManager`

```js
var callbacks = new _.M.Priority();

callbacks.add(function(){
    console.log('callback 1');
});
callbacks.add(function(){
    console.log('callback 2');
}, _.M.PRIORITY_HIGH);

_.each(callbacks.export(true), function(cb){
    cb();
});
=> callback 2
=> callback 1
```
