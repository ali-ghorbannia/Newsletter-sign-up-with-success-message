window.onload = function () {
  // Document objects
  const content = document.getElementsByClassName("newsletter")[0];
  const subscribe = document.getElementsByClassName("form-subscribe")[0];
  const emailError = document.getElementById("error-lable");
  const emailInput = document.getElementById("newsletter-input");
  const notification = document.getElementsByClassName("succsess")[0];
  const userEmailDisplay = document.getElementById("subsciber-email");
  const closeNotification = document.getElementById("close-succsess");
  // Handlers
  const isValidEmail = (email) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

  const showNotificationSuccess = () => {
    notification.classList.remove("hide");
    content.classList.add("hide");
    userEmailDisplay.innerHTML = emailInput.value;
  };

  const showEmailError = () => {
    emailError.classList.remove("hide");
    emailInput.classList.add("error");
  };
  const closeNotificationForm = () => {
    notification.classList.add("hide");
    content.classList.remove("hide");
    emailInput.classList.remove("error");
    emailError.classList.add("hide");
  };
  // Events
  subscribe.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isValidEmail(emailInput.value)) {
      showEmailError();
      return;
    }
    showNotificationSuccess();
  });
  closeNotification.addEventListener("click", (e) => {
    e.preventDefault();
    closeNotificationForm();
  });
};
