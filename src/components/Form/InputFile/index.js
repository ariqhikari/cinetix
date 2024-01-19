import { useState, useRef, useEffect, useCallback } from "react";
import propTypes from "prop-types";
import toast from "react-hot-toast";

// services
import { formatNumber } from "services/general";
import Button from "components/Button";

const InputFile = (props) => {
  const { value } = props;

  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("Tambah File");
  const [desc, setDesc] = useState(
    <>
      atau seret dan lepas di sini.
      <i className="text-en">or drag and drop here.</i>
    </>
  );

  const fileWrap = useRef(null);
  const input = useRef(null);

  const handleInput = (e) => {
    e.preventDefault();
    showFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      showFile(e.dataTransfer.files[0]);
    } else {
      toast.error(
        <span>
          Yang anda unggah bukan gambar!
          <i className="text-en">What you uploaded is not a picture!</i>
        </span>
      );
    }
  };

  const showFile = useCallback(
    (file) => {
      const fileType = file.type;
      const fileSize = Math.round(file.size / 1024);
      const validExtensions = ["image/jpeg", "image/jpg", "image/png"];

      // Check extension
      if (validExtensions.includes(fileType)) {
        // Check size
        if (fileSize > 5120) {
          toast.error(
            <span>
              Gambar melebihi batas size 5 MB!
              <i className="text-en">The image exceeds the 5MB size limit!</i>
            </span>
          );
          return;
        }

        const fileReader = new FileReader();

        // File on load
        fileReader.onload = () => {
          setTitle(file.name);
          setSrc(fileReader.result);

          if (fileSize >= 1000) {
            setDesc(`Size - ${formatNumber(fileSize)} MB`);
          } else {
            setDesc(`Size - ${fileSize} KB`);
          }

          // Send Event
          props.onChange(file);
        };

        fileReader.readAsDataURL(file);
      } else {
        toast.error(
          <span>
            Yang anda unggah bukan gambar!
            <i className="text-en">What you uploaded is not a picture!</i>
          </span>
        );
      }
    },
    [props]
  );

  useEffect(() => {
    if (value) {
      showFile(value);
    }
  }, [value]);

  return (
    // <div
    //   ref={fileWrap}
    //   onDragOver={(e) => e.preventDefault()}
    //   onDragLeave={(e) => e.preventDefault()}
    //   onDrop={handleDrop}
    //   onClick={() => input.current.click()}
    //   className={`flex h-[60vh] cursor-pointer flex-col items-center justify-center border-[3px] border-dashed border-cream text-center transition duration-300 hover:border-primary-yellow ${
    //     !title === "Tambah Avatar" && "!border-primary-yellow"
    //   }`}
    // >
    //   {title === "Tambah Avatar" && (
    //     <Lottie options={defaultOptions} height={140} width={140} />
    //   )}

    //   {src && (
    //     <img
    //       src={src}
    //       className="mb-3 h-[100px] w-[100px] rounded-full object-cover"
    //     />
    //   )}

    //   <h3 className="mb-1 text-2xl font-medium text-primary-yellow underline">
    //     {title === "Tambah Avatar" ? (
    //       <span>
    //         Tambah Avatar <i className="text-en">Add Avatar</i>
    //       </span>
    //     ) : (
    //       title
    //     )}
    //   </h3>
    //   <span className="text-accent-gray">{desc}</span>

    //   <input
    //     type="file"
    //     value=""
    //     ref={input}
    //     accept="image/png, image/jpeg, image/jpg"
    //     hidden
    //     onChange={handleInput}
    //   />
    // </div>
    <div className={["card card-form !justify-between !py-0 !px-5"].join(" ")}>
      <span>{title}</span>
      <input
        type="file"
        value=""
        ref={input}
        accept="image/png, image/jpeg, image/jpg"
        hidden
        onChange={handleInput}
      />
      <Button
        className="my-3 !rounded-lg !py-1"
        isSecondary
        onClick={() => input.current.click()}
      >
        Pilih File
      </Button>
    </div>
  );
};

export default InputFile;

InputFile.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.object,
};
