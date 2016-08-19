title: _.M.resetID
-----

Đặt lại ID của danh mục

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
        <td><code>type</code></td>
        <td>string/number</td>
        <td><code>"unique_id"</code></td>
        <td>Danh mục</td>
    </tr>
    <tr>
        <td><code>value</code></td>
        <td>number</td>
        <td>undefined</td>
        <td>Giá trị ID của danh mục, nếu để trống sẽ xóa danh mục</td>
    </tr>
    </tbody>
</table>

### Kết quả trả về
<dl class="dl-horizontal">
    <dt>undefined</dt><dd>Danh mục đã được xóa</dd>
    <dt>number</dt><dd>ID hiện tại</dd>
</dl>

### Ví dụ
```js
_.M.nextID(); //unique_id_1
_.M.nextID(); //unique_id_2
_.M.resetID();
_.M.currentID(); //false
_.M.nextID(); //unique_id_1
```
