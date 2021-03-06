$(function () {
  $.extend({
    getPubHead: function () {
      return `
  <div class="container-fluid" id="pub-head">
  <div class="row">
    <div class="col-md-8">
      <dl class="myflex dlflex">
        <dt><img src="./favicon32.ico" /></dt>
        <dd class="myline">|</dd>
        <dd>
          <h1 class="site-title">华小智人工智能平台</h1>
        </dd>
      </dl>
      <ul class="myflex navflex">
        <li>
          <a href="/index.html" class="navcurrent">全部课程</a>
          <ul>
            <li>
              <div class="nav-nav-img">
                <a href="/index.html">
                  <img src="./favicon32.ico" />
                </a>
              </div>
              <div class="nav-nav-body">
              <a href="/index.html">
                <h4>Python基础语法</h4>
                <p>全面学习Python编写所需语言</p>
                </a>
              </div>
            </li>

          </ul>
        </li>
        <li>
          <a href="/docker/manager">容器管理</a>
          <ul>
            <li>
              <div class="nav-nav-img">
                <a href="/docker/manager">
                  <img src="./favicon32.ico" />
                </a>
              </div>
              <div class="nav-nav-body">
              <a href="/docker/manager">
                <h4>Python基础语法</h4>
                <p>全面学习Python编写所需语言</p>
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="/class/manager">课程管理</a>
          <ul>
            <li>
              <div class="nav-nav-img">
                <a href="/class/manager">
                  <img src="./favicon32.ico" />
                </a>
              </div>
              <div class="nav-nav-body">
              <a href="/class/manager">
                <h4>Python基础语法</h4>
                <p>全面学习Python编写所需语言</p>
                </a>
              </div>
            </li>

          </ul>
        </li>
        <li><a href="#">wiki</a></li>
      </ul>
    </div>

    <div class="col-md-4 hidden-xs myseach">
      <div class="row">
        <div class="col-lg-7 hidden-md hidden-sm">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Book Class Show"
            />
            <span class="input-group-addon">
              <span class="glyphicon-search glyphicon"></span>
            </span>
          </div>
        </div>
        <div class="col-md-12 col-lg-4 myput">
          <a
            href="#"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
            >登陆
          </a>
          <span>|</span>
          <a href="/login.html?do=reg">注册</a>
        </div>
      </div>
    </div>
  </div>
</div>
      `
    },
    getPubFoot: function () {
      return `
      <div class="container-fluid footer" id="pub-foot">
  <div class="w">
    <p>
      <a href="#">企业服务</a>
      <a href="#">人才招聘</a>
      <a href="#">联系我们</a>
      <a href="#">讲师招募</a>
      <a href="#">帮助中心</a>
      <a href="#">意见反馈</a>
      <a href="#">华小智大学</a>
      <a href="#">代码托管</a>
      <a href="#">友情连接</a>
    </p>
    <p>
      Copyright@2015-2020 华小智版权所有
      品牌，课程和网页设计版权由华小智持有，未经本公司允许，请勿建立镜像或者其它违法用途
    </p>
    <p>
      京ICP备15003345-1 | 京公备案110号 | 京公备案110号 | 京公备案110号 |
      京ICP备15003345-1 | 京公备案110号 | 京公备案110号 | 京公备案110号
    </p>
  </div>
</div>
      `
    },
  })
  $('header').empty().html($.getPubHead())
  $('footer').empty().html($.getPubFoot())

  var userinfo = sessionStorage.getItem('userinfo')
    ? JSON.parse(sessionStorage.getItem('userinfo'))
    : ''
  if (userinfo.token) {
    $('.myput').html('欢迎  ' + userinfo.nickname + '<a id="logout">注销</a>')
    $('#logout').on('click', function (param) {
      $.delUserinfo('userinfo')
      window.location = '/index.html'
    })
  }
})
