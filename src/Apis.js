import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export function uploadFile(uploadedFile) {
    const formData = new FormData();
    formData.append('file', uploadedFile);
    axiosInstance({
        method: 'POST',
        url: `${process.env.REACT_APP_BACKEND_URL}/attachment-file`,
        data: formData,
        headers: {
            'content-type': `multipart/form-data`,
        },
    });
}

export function removeUploadedFile(fileObj) {
    const fileName = fileObj.name;
    axiosInstance.delete(`/attachment-file?fileName=${fileName}`);
}

export function sendEmail(emailData) {
    axiosInstance.post('/send-mail', emailData);
}