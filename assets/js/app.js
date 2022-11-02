let p = document.querySelector('p');
let imgInput = document.querySelector('#imgInput');
let textInput = document.querySelector('#textInput');

// reading an image from file 
imgInput.addEventListener('change', function () {

    const reader = new FileReader();
    reader.onload = () => {


        const img = new Image();
        img.src = reader.result;
        document.body.appendChild(img);
        console.log('shil');


    };
    reader.readAsDataURL(imgInput.files[0]);

}, false);

// reading and converting file to base64 code;
textInput.addEventListener('change', function () {

    const reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result);

    };
    reader.readAsDataURL(textInput.files[0]);

}, false);





//  dropping and img to body
function handleFiles(file) {
    const reader = new FileReader();
    reader.onload = () => {

        const img = new Image();
        img.src = reader.result;
        document.body.appendChild(img);


    };
    reader.readAsDataURL(file[0]);
}

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();


});
document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
    console.log(e.dataTransfer.files);

}, false)


