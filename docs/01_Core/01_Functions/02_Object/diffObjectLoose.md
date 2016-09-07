---
title: _.M.diffObjectLoose
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
        <td><code>objects</code></td>
        <td>object | object[]</td>
        <td></td>
        <td>Argument các object cần so sánh</td>
    </tr>
    </tbody>
</table>

### Ví dụ
```js
_.M.diffObjectLoose({a: 0, b: 1}, {a: '0', b: 2}); //{b: 1}
```

