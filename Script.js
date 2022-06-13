//  change creates an event listener that triggers the custom function
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};

// print to the browser console when a dropdown menu item is selected
console.log(d3.selectAll("#menu").node().id);