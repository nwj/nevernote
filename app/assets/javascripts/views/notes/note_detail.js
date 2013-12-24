Nevernote.Views.NoteDetail = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");

    this.bindTo(Nevernote.note, "add", this.render);
    this.bindTo(Nevernote.note, "remove", this.render);
    this.bindTo(Nevernote.note, "change", this.render);
  },

  events: {
    "click .note-title > h2" : "edit",
    "blur .note-title > .input" : "saveTitle",
    "click .note-body > p" : "edit",
    "blur .note-body > .input" : "saveBody"
  },

  render: function() {
    this.$el.html(JST['notes/detail']());

    return this;
  },

  edit: function(event) {
    $(event.currentTarget).toggleClass('hide');
    var inputEl = $(event.currentTarget).parent().find('.input');
    inputEl.toggleClass('hide');
    inputEl.focus();
  },

  saveTitle: function(event) {
    var formData = $(event.target).serializeJSON();

    Nevernote.note.save(formData, {
      wait: true,
      success: function() {
        Nevernote.notes.add(Nevernote.note, {merge: true});
      }
    });

    $(event.currentTarget).toggleClass('hide');
    $(event.currentTarget).parent().find('.input').toggleClass('hide');
  },

  saveBody: function(event) {
    var formData = {content: $(event.target).html()}

    Nevernote.note.save(formData, {
      wait: true,
      success: function() {
        Nevernote.notes.add(Nevernote.note, {merge: true});
      }
    });

    $(event.currentTarget).toggleClass('hide');
    $(event.currentTarget).parent().find('.input').toggleClass('hide');
  }
});
