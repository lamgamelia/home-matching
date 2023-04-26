const { useState, useEffect } = React;

function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {reject(error)};
    })
}

export function ImgUpload() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedBase64, setSelectedBase64] = useState([]);

  useEffect(() => {{
    console.log(selectedBase64);
  }}, [selectedBase64])

  const onSelectFile = async (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    console.log(selectedFilesArray);
    const Base64Array = await selectedFilesArray.map((file) => {
        return convertToBase64(file)});
    console.log(Base64Array);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);      
    });
    
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setSelectedBase64((previousBase64) => previousBase64.concat(Base64Array));
    
    // FOR BUG IN CHROME
    //event.target.value = "";
  };

  const deleteHandler = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section style = {{padding: "2rem 0"}}>
      <label style = {{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px dotted black",
        borderRadius: "20px",
        width: "10rem",
        height: "10rem",
        cursor: "pointer",
        fontSize: "large",
      }}>
        + Add Images
        <br />
        <span style={{fontWeight: "lighter", fontSize: "small", paddingTop: "0.5rem"}}>up to 10 images</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
          style = {{display:"none"}}
        />
      </label>
      <br />

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="btn btn-success"
            style = {{display:"block"}}
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="d-flex flex-row flex-wrap align-items-center justify-content-center" style={{paddingTop: "30px", paddingBottom: "30px"}} >
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="position-relative" style={{marginLeft:"10px", marginRight:"10px"}}>
                <img src={image} height="200" alt="upload" />
                <p>{index + 1}</p>
                <button className="btn btn-outline-danger btn-sm" onClick={() => deleteHandler(image)} style={{position:"absolute", bottom: 5, right: 0}}> 
                    delete
                </button>
                

              </div>
            );
          })}
      </div>
    </section>
  );
};