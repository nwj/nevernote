Nevernote.Views.NotebookProperties = Backbone.View.extend({
  id: "lightbox-dialog",

  events: {
    "click button.save" : "save",
    "click button.cancel" : "cancel"
  },

  render: function() {
    this.$el.html(JST['notebooks/properties']({
        notebook: this.model
    }));

    return this;
  },

  save: function(event) {
    event.preventDefault();
    var formData = $(event.target.form).serializeJSON();
    this.model.save(formData);
    this.leave();
    Nevernote.notebooks.fetch()
  },

  cancel: function(event) {
    event.preventDefault();
    this.leave();
  },

  leave: function() {
    $('#lightbox').toggleClass('hide');
    this.off();
    this.remove();
  }

});
