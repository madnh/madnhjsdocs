---
title: _.M.diffObjectWithCallback
---

Trả về object các item khác nhau giữa một object với các object khác. Loose compare

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
        <td><code>callback</code></td>
        <td>function</td>
        <td></td>
        <td>Callback có 2 parameter:
            <dl class="dl-horizontal">
                <dt>base value</dt><dd>Giá trị của item ở object gốc</dd>
                <dt>other value</dt><dd>Giá trị của item ở object khác</dd>
            </dl>
            Callback trả về true/false thì 2 value sẽ là khác/giống nhau.
        </td>
    </tr>
    <tr>
        <td><code>objects</code></td>
        <td>object | object[]</td>
        <td></td>
        <td>Argument các object cần so sánh</td>
    </tr>
    </tbody>
</table>

### Ví dụ
```js
var cb = function(base, other) {
  return base !== other;
}
_.M.diffObjectWithCallback(cb, {a: 0, b: 1}, {a: '0', b: 1}); //{a: 0}
```

