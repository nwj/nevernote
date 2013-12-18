Nevernote.Views.NotebookRename = Backbone.View.extend({
  events: {
    "click button.save" : "save",
    "click button.cancel" : "leave"
  },

  render: function() {
    this.$el.html(JST['notebooks/rename']({
        notebook: this.model
    }));

    return this.$el;
  },

  save: function(event) {
    var self = this;
    event.preventDefault();
    var formData = $(event.target.form).serializeJSON();
    this.model.save(formData);
  },

  leave: function() {}

});
