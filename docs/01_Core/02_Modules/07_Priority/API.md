`_.M.Priority` kế thừa class `_.M.ContentManager`, có các property và method của một `_.M.ContentManager` instance

## Properties
<table class="table table-striped">
    <thead>
    <tr>
        <th>Tên</th>
        <th>Kiểu dữ liệu</th>
        <th>Giá trị mặc định</th>
        <th>Mô tả</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>_priorities</code></td>
        <td>Object</td>
        <td>{}</td>
        <td>Các priority number (object key) và mảng các key của priority đó (object value)</td>
    </tr>
    <tr>
        <td><code>_key_mapped</code></td>
        <td>Object</td>
        <td>{}</td>
        <td>Các key và priority tương ứng với key đó</td>
    </tr>
    </tbody>
</table>

## Methods
<div class="panel panel-info">
    <div class="panel-heading"><strong>add</strong></div>
    <div class="panel-body">
        Thêm nội dung
        <div class="alert alert-info"><strong>OVERRIDE</strong> method <code>add</code> của <strong>_.M.ContentManager</strong></div>
    </div>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Parameters</h4>
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
                    <td><code>content</code></td>
                    <td>*</td>
                    <td></td>
                    <td>Nội dung cần thêm</td>
                </tr>
                <tr>
                    <td><code>priority</code></td>
                    <td>number</td>
                    <td>_.M.PRIORITY_DEFAULT</td>
                    <td>Độ ưu tiên của nội dung này</td>
                </tr>
                <tr>
                    <td><code>meta</code></td>
                    <td>*</td>
                    <td>undefined</td>
                    <td>Meta info của nội dung</td>
                </tr>
                </tbody>
            </table>
        </li>
        <li class="list-group-item">
            <h4>Returns</h4>
            <dl class="dl-horizontal">
                <dt>string</dt>
                <dd>content key</dd>
            </dl>
        </li>
        <li class="list-group-item">
            <h4>Examples</h4>
<pre><code class="javascript">var callbacks = new _.M.Priority();
callbacks.add(function(){
console.log('callback 1');
});
=> "content_priority_0"
</code></pre>
        </li>
    </ul>
</div>
<div class="panel panel-info">
    <div class="panel-heading"><strong>has</strong></div>
    <div class="panel-body">
        Kiểm tra một key có tồn tại không?
        <div class="alert alert-info"><strong>OVERRIDE</strong> method <code>has</code> của <strong>_.M.ContentManager</strong></div>
    </div>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Parameters</h4>
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
                    <td><code>key</code></td>
                    <td>string</td>
                    <td></td>
                    <td>Key cần kiểm tra</td>
                </tr>
                </tbody>
            </table>
        </li>
        <li class="list-group-item">
            <h4>Returns</h4>
            <dl class="dl-horizontal">
                <dt>boolean</dt>
                <dd></dd>
            </dl>
        </li>
    </ul>
</div>
<div class="panel panel-info">
    <div class="panel-heading"><strong>hasPriority</strong></div>
    <div class="panel-body">
        Kiểm tra một priority number có tồn tại không
    </div>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Parameters</h4>
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
                    <td><code>priority</code></td>
                    <td>number</td>
                    <td></td>
                    <td>Priority number cần kiểm tra</td>
                </tr>
                </tbody>
            </table>
        </li>
        <li class="list-group-item">
            <h4>Returns</h4>
            <dl class="dl-horizontal">
                <dt>boolean</dt>
                <dd></dd>
            </dl>
        </li>
        <li class="list-group-item">
            <h4>Examples</h4>
<pre><code class="javascript">var p = new _.M.Priority();
p.add(123);
p.add('abc', _.M.PRIORITY_HIGHEST);
p.hasPriority(_.M.PRIORITY_DEFAULT); //true
p.hasPriority(_.M.PRIORITY_HIGHEST); //true
p.hasPriority(_.M.PRIORITY_LEVEL_4); //false</code></pre>
        </li>
    </ul>
</div>
<div class="panel panel-info">
    <div class="panel-heading"><strong>remove</strong></div>
    <div class="panel-body">
        Xóa key
        <div class="alert alert-info"><strong>OVERRIDE</strong> method <code>remove</code> của <strong>_.M.ContentManager</strong></div>
    </div>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Parameters</h4>
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
                    <td><code>keys</code></td>
                    <td>string|string[]</td>
                    <td></td>
                    <td>Content keys</td>
                </tr>
                <tr>
                    <td><code>priorities</code></td>
                    <td>number|number[]</td>
                    <td>All priorities</td>
                    <td>Special priorities</td>
                </tr>
                </tbody>
            </table>
        </li>
        <li class="list-group-item">
            <h4>Returns</h4>
            <dl class="dl-horizontal">
                <dt>string[]</dt><dd>Các key đã xóa</dd>
            </dl>
        </li>
        <li class="list-group-item">
            <h4>Example</h4>
            <pre><code class="javascript">callbacks.remove('ContentManager_4_priority_1'); //["ContentManager_4_priority_1"]
callbacks.remove(['ContentManager_4_priority_1', 'ContentManager_4_priority_2'], [100,250]); //["ContentManager_4_priority_1", "ContentManager_4_priority_2"]</code></pre>
        </li>
    </ul>
</div>
<div class="panel panel-info">
    <div class="panel-heading"><strong>removeContent</strong></div>
    <div class="panel-body">
        Xóa content
        <div class="alert alert-info"><strong>OVERRIDE</strong> method <code>removeContent</code> của <strong>_.M.ContentManager</strong></div>
    </div>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Parameters</h4>
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
                    <td><code>content</code></td>
                    <td>*</td>
                    <td></td>
                    <td>Nội dung cần xóa</td>
                </tr>
                <tr>
                    <td><code>priority</code></td>
                    <td>number</td>
                    <td>undefined</td>
                    <td>Priority number của nội dung</td>
                </tr>
                </tbody>
            </table>
        </li>
        <li class="list-group-item">
            <h4>Returns</h4>
            <dl class="dl-horizontal">
                <dt>boolean</dt><dd>Priority number không tồn tại</dd>
                <dt>string[]</dt><dd>Các key của content bị xóa</dd>
            </dl>
        </li>
        <li class="list-group-item">
            <h4>Examples</h4>
<pre><code class="javascript">var p = new _.M.Priority();
p.add(123);
p.add('abc', _.M.PRIORITY_HIGHEST);
p.removeContent(123); //["content_priority_1"]
p.removeContent(123, _.M.PRIORITY_HIGHEST);
=> Priority _.M.PRIORITY_HIGHEST tồn tại => []
p.removeContent(123, _.M.PRIORITY_HIGH);
=> Priority _.M.PRIORITY_HIGH không tồn tại => false
</code></pre>
        </li>
    </ul>
</div>
<div class="panel panel-info">
    <div class="panel-heading"><strong>export</strong></div>
    <div class="panel-body">
        Lấy về các nội dung, đã sắp sếp theo độ ưu tiên
    </div>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Parameters</h4>
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
                    <td><code>content_only</code></td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>
                        <dl class="dl-horizontal">
                            <dt>false</dt><dd>Trả về nội dung và meta info</dd>
                            <dt>true</dt><dd>Chỉ trả về nội dung</dd>
                        </dl>
                    </td>
                </tr>
                </tbody>
            </table>
        </li>
        <li class="list-group-item">
            <h4>Returns</h4>
            <dl class="dl-horizontal">
                <dt>array</dt><dd>Mảng các nội dung (có thể bao gồm meta info)</dd>
            </dl>
            Nếu kết quả trả về không chỉ là content thì sẽ có cấu trúc như sau:
            <dl class="dl-horizontal">
                <dt>content</dt><dd>Nội dung</dd>
                <dt>meta</dt><dd>Meta</dd>
                <dt>key</dt><dd>priority content key, thường dùng để cập nhật về sau</dd>
            </dl>
        </li>
        <li class="list-group-item">
            <h4>Examples</h4>
<pre><code class="javascript">var p = new _.M.Priority();
p.add(123, _.M.PRIORITY_DEFAULT, {name: 'Ohohoho'});
p.add('abc', _.M.PRIORITY_HIGHEST);
p.getContents(true);
=> ['abc', 123]
p.export();
=> [{content: 'abc', meta: undefined, key: 'Priority_1_content_1'},{content: 123, meta: {name: 'Ohohoho'}, key: 'Priority_1_content_2'}]
</code></pre>
        </li>
    </ul>
</div>
<div class="panel panel-info">
    <div class="panel-heading"><strong>status</strong></div>
    <div class="panel-body">
        Tình trạng
    </div>
    <ul class="list-group">
        <li class="list-group-item">
            <h4>Parameters</h4>
            <div class="alert alert-info">Không có parameter</div>
        </li>
        <li class="list-group-item">
            <h4>Returns</h4>
            Object với cấu trúc
            <dl class="dl-horizontal">
                <dt>priorities</dt><dd>Số lượng các priority</dd>
                <dt>contents</dt><dd>Số lượng nội dung</dd>
            </dl>
        </li>
        <li class="list-group-item">
            <h4>Examples</h4>
<pre><code class="javascript">var p = new _.M.Priority();
p.add('A', 1);
p.add('B', 1);
p.add('A', 2);
p.status(); //{priorities: 2, contents: 3}</code></pre>
        </li>
    </ul>
</div>
