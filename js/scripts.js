var addressBook = {
entries: [],
};

function Entry(firstName, lastName, email, number) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.number = number;
}

Entry.prototype.enter = function(newEntry) {

  addressBook.entries.push(newEntry);
  console.log(addressBook.entries);
  console.log(addressBook.entries[0]);

}

$(document).ready(function() {
  $("form").submit(function(event) {

    event.preventDefault();

  var entryFirst = $("#first").val();
  var entryLast = $("#last").val();
  var entryEmail = $("#email").val();
  var entryNumber = $("#number").val();

  var newEntry = new Entry(entryFirst, entryLast, entryEmail, entryNumber);

  newEntry.enter(newEntry);
  alert(newEntry);



  });
});
