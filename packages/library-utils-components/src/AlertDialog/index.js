import Swal from "sweetalert2";

export const showDialog = (
  title,
  text,
  icon,
  showCancelButton = false,
  confirmButtonText = "OK",
  allowOutsideClick = false,
  okAction = undefined,
  cancelButtonText = "Cancel",
  cancelAction = undefined
) => {
  const width = window.innerWidth;
  let classMoBile = undefined;
  if (width < 576) {
    classMoBile = {
      popup: "mobilePopup",
      title: "mobileTitle",
      content: "mobileContent",
    };
  }

  Swal.fire({
    title: title,
    html: text,
    customClass: classMoBile,
    width: "45%",
    icon: icon,
    showCancelButton: showCancelButton,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText,
    allowOutsideClick: allowOutsideClick,
    cancelButtonText: cancelButtonText,
  }).then(async (resultDialog) => {
    if (resultDialog.value && okAction) {
      okAction();
    } else if (
      resultDialog.dismiss === Swal.DismissReason.cancel &&
      cancelAction
    ) {
      cancelAction();
    }
  });
};
