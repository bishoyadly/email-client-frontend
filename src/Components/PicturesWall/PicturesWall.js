import React, {useState} from 'react';
import {Upload, Modal, message} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import pictureWallsStyles from './PicturesWalls.module.scss';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default function PicturesWall() {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');


    const state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }
        ],
    };

    const [fileList, setFileList] = useState([]);
    const uploadButton1 = (
        <div>
            <PlusOutlined/>
            <div className="ant-upload-text">Upload</div>
        </div>
    );


    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        const previewImageValue = file.url || file.preview;
        setPreviewImage(previewImageValue);
        setPreviewVisible(true);
    };

    const handleChange = ({fileList}) => setFileList(fileList);

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div className={pictureWallsStyles.uploadContainer}>
            <Upload
                className={pictureWallsStyles.uploadButton}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </div>
    );
}