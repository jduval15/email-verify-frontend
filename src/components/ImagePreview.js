import React from 'react';
import DOMPurify from 'dompurify';

const ImagePreview = ({ src }) => {
    const sanitizedSrc = DOMPurify.sanitize(src);
    return (
        <div className="empty-image border-info text-info">
            <img src={sanitizedSrc} alt="" className="fluid" />
            <i className="fa-solid fa-image"></i>
        </div>
    );
};

export default ImagePreview;