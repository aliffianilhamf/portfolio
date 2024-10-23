import Swal from "sweetalert2";

/*=============== View Transition (Scale) ===============*/
document.addEventListener("astro:page-load", () => {
  for (const element of document.querySelectorAll("#fade-image")) {
    element.classList.remove("scale-90");
  }
});

document.addEventListener("astro:page-load", () => {
  // Slider
  const slider = document.querySelector("[data-tech-slider]");
  let copy = document.querySelector(".tech-card")?.cloneNode(true);
  slider?.append(copy);

  // modal
  const modal = document.querySelector("[data-tech-modal]");
  const h1 = document.querySelector("[data-tech-h1]");
  const stop = document.querySelector("[data-tech-stop]");

  h1?.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    modal.classList.add("flex");
  });

  slider?.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    modal.classList.add("flex");
  });

  modal?.addEventListener("click", () => {
    modal.classList.remove("flex");
    modal.classList.toggle("hidden");
  });

  stop?.addEventListener("click", (e) => e.stopPropagation());

  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }
  });
});

// email js
// const btn = document.getElementById("button");

// document.getElementById("form")?.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Set current url
//   window.history.pushState({}, "", "/");

//   btn.textContent = "Sending...";

//   const serviceID = "default_service";
//   const templateID = "template_ll3rcig";

//   emailjs.sendForm(serviceID, templateID, this).then(
//     () => {
//       btn.textContent = "Send Email";
//       form.reset();
//       Swal.fire({
//         title: "Email Sent!",
//         text: "Your email has been successfully sent.",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//     },
//     (err) => {
//       btn.textContent = "Send Email";
//       // alert(JSON.stringify(err));
//       Swal.fire({
//         title: "Error",
//         text: JSON.stringify(err),
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   );
// });
