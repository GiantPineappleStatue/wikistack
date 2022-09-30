const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
    <div class="col-sm-10">
    <label for="title" class="col-sm-2 control-label">Page Title</label>
    <input id="title" name="title" type="text" class="form-control"/>
    </div>
    </div>

    <div class="form-group">
    <div class="col-sm-10">
    <label for="author" class="col-sm-2 control-label">Author</label>
    <input id="author" name="author" type="text" class="form-control"/>
    </div>
    </div>

    <div class="form-group">
    <div class="col-sm-10">
    <label for="email" class="col-sm-2 control-label">Email</label>
    <input id="email" name="email" type="text" class="form-control"/>
    </div>
    </div>

    <div class="form-group">
    <div class="col-sm-10">
    <label for="content" class="col-sm-2 control-label">Content</label>
    <input id="content" name="content" type="textarea" class="form-control"/>
    </div>
    </div>

    <div class="form-group">
    <div class="col-sm-10">
    <label for="page-status" class="col-sm-2 control-label">Page Status</label>
    <input id="status" name="status" type="textarea" class="form-control"/>
    </div>
    </div>

      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
