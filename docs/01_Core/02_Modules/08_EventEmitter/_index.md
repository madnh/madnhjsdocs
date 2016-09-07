<p><strong>EventEmitter</strong> là base class, hỗ trợ quản lý các sự kiện của instance</p>
<p>Kế thừa class <code>_.M.BaseClass</code></p>

<ul>
    <li>Đăng ký/Hủy đăng ký các listener cho các event</li>
    <li>Khởi tạo các event</li>
    <li>Lắng nghe sự kiện của các EventEmitter khác</li>
</ul>

## Đăng ký/Hủy đăng ký các listener cho các event

<pre><code class="javascript">
    var obj = new _.M.EventEmitter();
    
    obj.on('event_1', function(){
        console.log('Event 1, Callback 1');
    });
    
    obj.on('event_1', function(){
        console.log('Event 1, Callback 2');
    });
    
    obj.emit('event_1');
    => 'Event 1, Callback 1'
    => 'Event 1, Callback 2'
</code></pre>

## Lắng nghe sự kiện của EventEmitter instance khác

### Notice

<p>Một <code>_.M.EventEmitter</code> instance khi nhận được thông báo từ một instance mà nó đang theo dõi (<strong>không</strong> phải một mimic event) sẽ phát sinh các sự kiện sau:</p>
<ul>
    <li><code>&lt;ID object thông báo&gt;.&lt;tên event&gt;</code></li>
    <li><code>&lt;type_prefix của object thông báo&gt;.&lt;tên event&gt;</code></li>
    <li><code>noticed.&lt;ID object thông báo&gt;.&lt;tên event&gt;</code></li>
    <li><code>noticed.&lt;ID object thông báo&gt;</code></li>
    <li><code>noticed.&lt;type_prefix của obejct thông báo&gt;.&lt;tên event&gt;</code></li>
    <li><code>noticed.&lt;type_prefix của object thông báo&gt;</code></li>
    <li><code>noticed</code></li>
</ul>
<p>Các event trên, mỗi event sẽ có data là một object có cấu trúc như sau</p>
<dl class="dl-horizontal">
    <dt>id</dt><dd>ID object thông báo</dd>
    <dt>type</dt><dd><code>type_prefix</code> của object thông báo</dd>
    <dt>event</dt><dd>Tên event</dd>
    <dt>data</dt><dd>Event data</dd>
</dl>
<div class="alert alert-info">
    <strong>Chú ý!</strong> Mỗi event khi được phát sinh và notice các followers sẽ phát sinh một event khác có tên <code><strong>&lt;tên event&gt;</strong>_complete</code>
</div>

<pre><code class="javascript">
    var obj2 = new _.M.EventEmitter();
    
    obj2.attachTo(obj);
    
    obj2.on('noticed', function(){
        console.log('EventEmitter instance 2 noticed', arguments);
    });
    
    obj.emit('event_1');
    => 'Event 1, Callback 1'
    => 'Event 1, Callback 2'
    => 'EventEmitter instance 2 noticed' ......
</code></pre>

### Mimic
<p>
    Khi nhận được thông báo về một sự kiện, nếu sự kiện đó có trong list của property <code>_event_mimics</code> thì sẽ được thực thi như là một event của instance, 
    các event notice sẽ không được emit nữa.
</p>

<pre><code class="javascript">
    var obj3 = new _.M.EventEmitter();
    
    obj3.attachTo(obj);
    obj3.mimic(obj.type_prefix + '.*');
    
    obj3.on('event_mimic', function(){
        console.log('Obj3 mimiced event event_mimic from obj');
    });
    obj3.on('event_mimic2', function(){
        console.log('Obj3 mimiced event event_mimic2 from obj');
    });
    
    obj3.on('noticed', function(){
        throw new Error('Noticed a mimic event');
    });
    
    obj.emit(['event_mimic', 'event_mimic2']);
    => 'Obj3 mimiced event event_mimic from obj'
    => 'Obj3 mimiced event event_mimic2 from obj'
</code></pre>

Hỗ trợ các mimic events:
<ul>
<li><code>&lt;tên event&gt;</code></li>
<li>wildcard: <code>&lt;type_prefix của object thông báo&gt;.*</code></li>
<li><code>&lt;type_prefix của object thông báo&gt;.&lt;tên event&gt;</code></li>
</ul>

### Private event

<p>
    Các object có thể có các event chỉ dành cho riêng event đó, khi phát sinh sẽ không notice các object khác 
</p>

<pre><code class="javascript">
    var obj4 = new _.M.EventEmitter();
    
    obj.private('event_private');
    obj4.attachTo(obj);
    
    obj.on('event_private', function(){
        console.log('Obj emitted a private event');
    });
    obj4.on('noticed', function(){
        throw new Error('Obj4 mimiced a private event from obj');
    });
    
    obj.emit('event_private');
    => 'Obj emitted a private event'
</code></pre>

### Attach Hard / Async

<p>Các EventEmitter instance có thể chọn cách nhận notice từ instance khác theo 2 cách:</p>
<ul>
<li>Notice <strong>SAU</strong> khi các event của instance phát sinh đã được emit: <strong>Asynchonous (<span class="text-danger">mặc định</span>)</strong></li>
<li>Notice <strong>NGAY</strong> khi các event của instance phát sinh đã được emit: <strong>hard</strong></li>
</ul>

<pre><code class="javascript">
var base = new _.M.EventEmitter();
var other = new _.M.EventEmitter();
var other_hard = new _.M.EventEmitter();

other.attachTo(base);
other_hard.attachHardTo(base);

other.on('noticed', function(event_data){
    console.log('OTHER noticed');
});
other_hard.on('noticed', function(event_data){
    console.log('OTHER_HARD noticed');
});

base.on('test', function(){
    console.log('BASE test');
});
base.on('test_complete', function(){
    console.log('BASE test_complete');
});
base.on('event_emitted', function(){
    console.log('BASE event_emitted');
});

base.emit('test', null, function(){
    console.log('BASE event test FINALLY');
});

/*======= Console =========
BASE test
BASE event_emitted
OTHER_HARD noticed
BASE test_complete
BASE event test FINALLY
OTHER noticed
*/
</code></pre>

