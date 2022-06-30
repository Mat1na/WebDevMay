const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const putBtn = document.getElementById("put");
const patchBtn = document.getElementById("patch");
const deleteBtn = document.getElementById("delete");

//get request
getBtn.addEventListener("click", (e) => {
  console.log("Hello click");
  fetch("http://localhost:5000/api")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  e.preventDefault();
});

//put request

putBtn.addEventListener("click", (e) => {
  fetch("http://localhost:5000/api/2", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    //data must be a string
    body: JSON.stringify({
      username: "Joe Dalton",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`Put request:${data}`);
    });
  e.preventDefault();
});

//patch requst
patchBtn.addEventListener("click", (e) => {
  fetch("http://localhost:5000/api/2", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    //data must be a string
    body: JSON.stringify({
      password: "123Dalton",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`Patch request:${data}`);
    });
  e.preventDefault();
});

//post request

postBtn.addEventListener("click", (e) => {
  fetch("http://localhost:5000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //data must be a string
    body: JSON.stringify({
      username: "student001",
      password: "s001",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`post request:${data}`);
    });
  e.preventDefault();
});

//delete request

deleteBtn.addEventListener("click", (e) => {
  fetch("http://localhost:5000/api/3", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`post request:${data}`);
    });
  e.preventDefault();
});
