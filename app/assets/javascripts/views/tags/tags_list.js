Nevernote.Views.TagsList = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.tags, "add", this.render);
    this.bindTo(Nevernote.tags, "remove", this.render);
    this.bindTo(Nevernote.tags, "reset", this.render);
  },

  render: function() {
    this.$el.html(JST['tags/list']());

    return this;
  },

});
