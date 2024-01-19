import moment from "moment";
import swal from "sweetalert2";
import axios from "axios";

export const strippedContent = (content, length = 40) => {
  let regex = /(<([^>]+)>)/gi;
  return (
    content.replace(regex, "").substring(0, length) +
    (content.length > length ? ".." : "")
  );
};

export const formatNumber = (number, isCurrency = true) => {
  var reverse = Math.round(number).toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);

  // Jika mata uang pemisah memakai dot(.) jika bukan pemisah memakai comma(,)
  if (isCurrency) {
    ribuan = ribuan.join(".").split("").reverse().join("");
  } else {
    ribuan = ribuan.join(",").split("").reverse().join("");
  }

  return ribuan;
};

export const formatDate = (date, format) => {
  return moment(date).format(format);
};

export const confirmModal = () => {
  return swal.fire({
    title: "Apa anda yakin? <i class='text-en'>Are you sure?</i>",
    html: "Anda tidak akan dapat mengembalikan ini! <i class='text-en'>You cannot restore this!</i>",
    icon: "warning",
    confirmButtonText: "Ya / <i>Yes</i>",
    cancelButtonText: "Tidak / <i>No</i>",
    showCancelButton: true,
    buttonsStyling: false,
    customClass: {
      confirmButton:
        "button bg-primary-yellow text-white text-lg font-medium mr-2",
      cancelButton: "button bg-red text-white text-lg font-medium",
    },
  });
};

export const successModal = (title, description) => {
  return swal.fire({
    title: title,
    html: description,
    icon: "success",
    buttonsStyling: false,
    customClass: {
      confirmButton: "button bg-green text-white text-lg font-medium",
    },
  });
};

export const toCapitalizeEachWord = (sentence) => {
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};

export const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const headingLogos = document.querySelectorAll(".sidebar-heading img");

  sidebar.classList.toggle("active");

  if (window.screen.width >= 1024) {
    if (!sidebar.classList.contains("active")) {
      headingLogos[0].classList.remove("active");
      headingLogos[1].classList.add("active");
    } else {
      setTimeout(() => {
        headingLogos[1].classList.remove("active");
        headingLogos[0].classList.add("active");
      }, 250);
    }
  }
};

export const getFaculties = () => {
  return axios.get(`${process.env.REACT_APP_API}/faculties`);
};
