var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var msg = $('form').find('#message')[0].value;
    var msgObj = {
      username: App.username,
      text: msg
    };
    Parse.create(msgObj, Parse.readAll((data) => {
      MessagesView.render([data.results[0]]);
    }));
    // render at some point
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};