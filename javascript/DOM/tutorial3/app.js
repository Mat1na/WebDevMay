onst firstColEl = document.querySelector('.first');
const ParentRowContainer = document.querySelector('.columns')

// find nextElementSibling of targeted one
const nextSiblingEl = firstColEl.nextElementSibling

// find the sibling from parentContainer
// nextElSibling
// solution1 ParentRowContainer.firstElementChild.nextElementSibling
// solution2 ParentRowContainer.children[0].nextElementSibling

// prevElSibling
// ParentRowContainer.lastElementChild.previousElementSibling

// ParentRowContainer.children[1].nextElementSibling > null

const g = t => document.createElement(t)

// insertBefore
// <div class="col-md-3 bg-primary p-5 first"></div>
const divCol = g('div')
divCol.className = "col-md-1 text-light bg-danger p-4"
divCol.innerText="DivCol1"
const divCol2 = g('div')
divCol2.className = "col-md-1 text-light bg-dark p-4"
divCol2.innerText="DivCol2"
// ParentRowContainer.insertBefore(divCol,ParentRowContainer.lastElementChild)
// ParentRowContainer.insertAdjacentElement('afterbegin',divCol2)
// ParentRowContainer.insertAdjacentElement('afterend',divCol2)
// ParentRowContainer.insertAdjacentElement('beforebegin',divCol2)
// ParentRowContainer.insertAdjacentElement('beforeend',divCol2)

// append method
ParentRowContainer.append(divCol)
ParentRowContainer.append(divCol2)