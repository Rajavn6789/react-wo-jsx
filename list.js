'use strict';

const createElement = React.createElement;
const listContainer = document.getElementById('list_container');

// Create button
const btnClass = "btn btn-large";
const btnText = "List 4";
const btnOnClickHandler = () => {
  console.log('button has been clicked');
}
const listButton = createElement('button', {className: btnClass, 'onClick': btnOnClickHandler}, btnText);

/**
 * Builds the necessary elements for the list
 */
function buildList() {
  return createElement(
    'div',
    { className: 'list-container'},
    createElement('h1', null, "Contacts"),
    createElement(
      "ul",
      { className: "list", user: { name: 'Raja', email:'name@domain.com' } },
      createElement(
        "li",
        null,
        'List 1'
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "mailto:me@example.com" },
          "List 2"
        )
      ),
      createElement(
        "li",
        null,
        "List 3"
      ),
      createElement(
        "li",
        null,
        listButton
      )
    ),
  );
}

// Mounts to dom
ReactDOM.render(
  buildList(),
  listContainer
);

// Unmounts component after 10 seconds
setTimeout(function() {
    ReactDOM.unmountComponentAtNode(listContainer);
}, 10000);
