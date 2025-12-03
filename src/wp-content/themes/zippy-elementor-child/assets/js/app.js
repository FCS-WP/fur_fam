$(document).ready(function ($) {
  // Init variables
  let selected_code = $("#sharing-code-block");
  let notification_popup = $("#code-title-popup");

  // Action
  /* Copy code to clipboard */
  selected_code.find(".private-code").on("click", function (e) {
    e.preventDefault();
    let _this = $(this);
    let code = _this.find(".elementor-heading-title").text();
    try {
      navigator.clipboard.writeText(code);
      elementorProFrontend.modules.popup.showPopup({ id: 127 });
    } catch (err) {
      alert("Oops! unable to copy!");
      console.log("ERROR", err);
    }
  });
});
