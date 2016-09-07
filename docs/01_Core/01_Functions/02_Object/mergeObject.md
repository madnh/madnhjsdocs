---
title: _.M.mergeObject
---

Merge các object. Nếu có parameter không phải là object sẽ được chuyển thành array.
Nếu một parameter là array sẽ được chuyển thành object, với index sẽ tăng thay đổi từ số index (của array khác) trước.

Object đầu tiên sẽ thay đổi như là result

### Tham số
<table class="table table-striped">
    <thead>
    <tr>
        <th>Tên</th>
        <th>Kiểu dữ liệu</th>
        <th>Tham số tùy chọn và giá trị mặc định</th>
        <th>Mô tả</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>*</code></td>
        <td>*</td>
        <td>*</td>
        <td>Argument các object cần merge</td>
    </tr>
    </tbody>
</table>

### Kết quả trả về
<dl class="dl-horizontal">
    <dt>object</dt><dd></dd>
</dl>

### Ví dụ
```js
var result,
object = {a: 'A', b: 'B'},
object2 = {b: 'BB', c: 'C'},
array = ['D', 'E', 'F'],
string = 'foo';
//
result = _.M.mergeObject(object, array, object2, string);
//result => {a: 'A', b: 'BB', c: 'C', 0: 'D', 1: 'E', 2: 'F', 3: 'foo'}
//result === object
```
