import React from "react";
import PropTypes from "prop-types";
import ImageUploader from "react-images-upload";
import Resizer from "react-image-file-resizer";
import "bootstrap/dist/css/bootstrap.min.css";

class InputImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreview: null,
      image: undefined,
      imageUrl: undefined,
    };
  }

  componentDidMount() {
    const { value, functionGetImage } = this.props;
    if (value && value.uuid && functionGetImage) {
      if (functionGetImage) {
        functionGetImage(value.uuid).then((result) => {
          if (result) {
            const url = window.URL.createObjectURL(new Blob([result]));
            this.setState({ imagePreview: url });
          }
        });
      }
    } else {
      this.setState({ imagePreview: value });
    }
  }

  renderPreview() {
    let { imagePreview } = this.state;
    const { className, textNoData } = this.props;
    if (imagePreview) {
      return (
        <div className={`preview-${className}`}>
          <img src={imagePreview} alt="Avatar" />
        </div>
      );
    } else {
      return (
        <div className={`preview-noData-${className}`}>
          {textNoData || "No data"}
        </div>
      );
    }
  }

  async handleChangeImage(pictureFiles, pictureDataURLs) {
    const {
      resizeImage,
      resizeFormat,
      resizeWidth,
      resizeHeight,
      resizeRotation,
      resizeOutType,
    } = this.props;
    const image = pictureFiles[0];

    if (
      pictureFiles &&
      pictureFiles.length > 0 &&
      pictureDataURLs &&
      pictureDataURLs.length > 0
    ) {
      if (resizeImage) {
        const newImage = await this.resizeFile(
          image,
          resizeFormat,
          resizeWidth,
          resizeHeight,
          resizeRotation,
          resizeOutType
        );
        this.setState({
          imagePreview: newImage,
          image: pictureFiles[0],
          imageUrl: pictureDataURLs[0],
        });
      } else {
        let reader = new FileReader();
        reader.onloadend = () => {
          this.setState({
            imagePreview: reader.result,
            image: pictureFiles[0],
            imageUrl: pictureDataURLs[0],
          });
        };
        reader.readAsDataURL(image);
      }
    }
  }

  resizeFile(file, format, width, height, rotation, outType) {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        width || 100,
        height || 100,
        format || "JPEG",
        100,
        rotation || 0,
        (uri) => {
          resolve(uri);
        },
        outType || "base64"
      );
    });
  }

  render() {
    const {
      name,
      id,
      labelField,
      divClassName,
      className,
      mandatory,
      visible,
      tooltip,
      showPreview,
      buttonText,
      maxFileSize,
      allowExtensions,
      singleImage,
      withIcon,
      withLabel,
      textFileSizeError,
      textFileTypeError,
    } = this.props;
    return (
      <div
        id={`${id}_Container`}
        className={`${
          visible !== undefined && visible === false ? "field-hidden" : ""
        } form-group`}
      >
        {labelField && (
          <div
            className={`labelDiv ${divClassName} no-padding`}
            title={tooltip || labelField}
          >
            <label
              id={`${id}_labelField`}
              className={
                mandatory ? "control-label mandatory" : "control-label"
              }
              htmlFor={id}
            >
              {`${labelField}${mandatory ? " *" : ""}`}
            </label>
          </div>
        )}
        {showPreview && this.renderPreview()}
        <div className={`${divClassName} inputFile`}>
          <ImageUploader
            className={`${className ? className : ""} product-image-uploader`}
            buttonClassName={`${
              className ? `button-${className}` : ""
            } button-product-image-uploader`}
            withPreview={false}
            buttonText={buttonText || "Upload File"}
            label={labelField}
            name={name}
            onChange={(val, val2) => {
              this.handleChangeImage(val, val2);
            }}
            imgExtension={allowExtensions || [".jpg", ".png"]}
            singleImage={singleImage || false}
            withIcon={withIcon || false}
            withLabel={withLabel || false}
            maxFileSize={maxFileSize || 1000000}
            fileSizeError={textFileSizeError || "Error file size"}
            fileTypeError={textFileTypeError || "Extension not allow"}
          />
        </div>
      </div>
    );
  }
}

InputImage.propTypes = {
  field: PropTypes.any,
  form: PropTypes.any,
  id: PropTypes.string.isRequired,
  labelField: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  visible: PropTypes.bool,
  tooltip: PropTypes.string,
  typeStyleErrorMessage: PropTypes.string,
  showPreview: PropTypes.bool,
  functionGetImage: PropTypes.func,
  buttonText: PropTypes.string,
  maxFileSize: PropTypes.number,
  allowExtensions: PropTypes.array,
  singleImage: PropTypes.bool,
  withIcon: PropTypes.bool,
  withLabel: PropTypes.bool,
  textFileSizeError: PropTypes.string,
  textFileTypeError: PropTypes.string,
  textNoData: PropTypes.string,
  resizeImage: PropTypes.bool,
  resizeCompressFormat: PropTypes.oneOf(["JPEG", "PNG ", "WEBP"]),
  resizeWidth: PropTypes.number,
  resizeHeight: PropTypes.number,
  resizeRotation: PropTypes.oneOf([0, 90, 180, 270, 360]),
  resizeOutType: PropTypes.oneOf(["base64", "blob"]),
};

export default InputImage;
