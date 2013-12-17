Nevernote.Views.TagsIndex = Backbone.View.extend({

  template: JST['tags/index'],

  initialize: function(options){
    this.tags = options.tags;
  },

  render: function() {
    this.$el.html(this.template({ tags: this.tags }));

    return this;
  },

});
