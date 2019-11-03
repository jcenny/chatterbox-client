var Friends = {

  friendsList: {},
  toggleStatus: function () {
  },
  toggleFriends: (event) => {
    console.log('clicked')
    var username = event.currentTarget.textContent;
    if (username in Friends.friendsList) {
      delete Friends.friendsList[username];
    } else {
      Friends.friendsList[username] = username;
    }

    Parse.readAll((data) => {
      MessagesView.filterFriends(data.results, Friends.friendsList);
    });
  }

};