Nevernote.Views.NoteDetail = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.note, "add", this.render);
    this.bindTo(Nevernote.note, "remove", this.render);
    this.bindTo(Nevernote.note, "change", this.render);
  },

  events: {
    "click .note-title > h2" : "edit",
    "blur .note-title > input" : "saveEdit"
  },

  render: function() {
    console.log("Detail view rendering");
    this.$el.html(JST['notes/detail']());

    return this;
  },

  edit: function(event) {
    $(event.currentTarget).toggleClass('hide');
    $('.note-title').find("input").toggleClass('hide');
    $('.note-title').find("input").focus();
  },

  saveEdit: function(event) {
    var formData = $(event.target).serializeJSON();
    Nevernote.note.save(formData, {
      success: function() {
        Nevernote.notes.add(Nevernote.note, {merge: true});
      }
    });

    $(event.currentTarget).toggleClass('hide');
    $('.note-title').find('h2').toggleClass('hide');
  }

});
