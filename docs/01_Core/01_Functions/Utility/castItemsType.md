---
title: _.M.castItemsType
---

Chuyển đổi kiểu dữ liệu của các item trong mảng/object

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
        <td><code>object</code></td>
        <td>array | object</td>
        <td></td>
        <td></td>
    </tr>
<tr>
    <td><code>type</code></td>
    <td>string</td>
    <td></td>
    <td>
       <p>Kiểu dữ liệu đích.</p>
       <p>Hỗ trợ:</p>
        <dl class="dl-horizontal">
            <dt>string</dt><dd>Chuỗi</dd>
            <dt>boolean</dt><dd>true/false</dd>
            <dt>number</dt><dd>Số học, bao gồm số thập phân</dd>
            <dt>integer</dt><dd>Số nguyên</dd>
            <dt>array</dt><dd>Mảng, dùng method <code>_.M.beArray</code> để chuyển đổi</dd>
            <dt>object</dt><dd>Object, dùng method <code>_.M.beObject</code> để chuyển đổi</dd>
        </dl>
    </td>
</tr>
    </tbody>
</table>

### Kết quả trả về
<dl class="dl-horizontal">
    <dt>Array</dt><dd></dd>
    <dt>Object</dt><dd></dd>
</dl>

### Throws
- Khi kiểu dữ liệu không hỗ trợ: **"Invalid cast type. Available types are: string, boolean, number, integer, array and object"**


### Ví dụ
```js
var arr = [1, 2, 'ABC', 0, false, {'name': 'Manh'}];
console.log(_.M.castItemsType(arr, 'string')); //['1', '2', 'ABC', '0', 'false', "[object Object]"]
console.log(_.M.castItemsType(arr, 'number')); //[1, 2, 0, 0, 0, 0]
console.log(_.M.castItemsType(arr, 'boolean')); //[true, true, true, false, false, true]
console.log(_.M.castItemsType(arr, 'array')); //[[1], [2], ['ABC'], [0], [false], [{'name': 'Manh'}]]
console.log(_.M.castItemsType(arr, 'object')); //[{0: 1}, {0: 2}, {0: 'ABC'}, {0: 0}, {0: false}, {'name': 'Manh'}]
```
