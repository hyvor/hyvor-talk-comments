import t from "../../../helpers/stateful/t";
import {AccentButton} from "../../Button/Button";
import {Fragment} from "preact";
import LoaderWrap from "../../Loader/LoaderWrap";
import {useRef, useState} from "preact/compat";
import {addImage} from "../prosemirror/helpers";
import {HBEditorView} from "../prosemirror/types";
import ApiService from "../../../services/ApiService";


export default function Image({ editor, onClose } : { editor: HBEditorView, onClose: Function }) {

    const [isUploading, setIsUploading] = useState(false);
    const [pastedURL, setPastedURL] = useState('');

    const fileInputRef = useRef<null | HTMLInputElement>(null);

    let pasteButtonDisabled = pastedURL.trim() === "";

    function uploadError(e) {
        PopupMessage(e);
        setIsUploading(false);
    }

    function handleImageAdd(src: string, alt: string = '') {
        addImage(editor, src, alt);
        onClose();
    }

    function handleFileUpload() {
        setIsUploading(true);

        const files = fileInputRef.current && fileInputRef.current.files,
            file = files ? files[0] : null;

        if (!file)
            return;

        if (
            file.type !== "image/jpeg" &&
            file.type !== "image/png" &&
            file.type !== "image/gif" &&
            file.type !== "image/webp"
        )
            return uploadError('Only PNG , GIF and JPEG images are allowed');

        const max = getConfig('meta.maxUploadSize');
        if (file.size > max * 1000000)
            return uploadError(`Image is too large (Max ${max}MB)`);

        const formData = new FormData();
        formData.append("image", file);

        ApiService.call({
            method: 'post',
            endpoint: '/media/upload',
            data: formData,
            complete: () => {
                setIsUploading(false);
                props.onPanelChange(null);
            },
            success: (json) => {
                if (!json.url) {
                    return uploadError("Something went wrong in uploading the image. Please try again  later.")
                }
                handleImageAdd(json.url, file.name);
            },
            error: () => uploadError("Unable to upload. Please check your network connection.")
        });
    }

    return <div className="panel-image">
        {
            isUploading ?
                <LoaderWrap size="small" padding={5}></LoaderWrap>
                :
                <Fragment>
                    <div className="left">
                        <AccentButton
                            scale="medium"
                            onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        >
                            { t('upload_image') }
                        </AccentButton>
                        <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileUpload}
                            style={{display: 'none'}}
                        />
                    </div>
                    <span className="or">{t('or')}</span>
                    <div className="right">
                        <input
                            type="text"
                            placeholder={t('paste_url')}
                            value={pastedURL}
                            onInput={e => setPastedURL((e.target as HTMLInputElement).value)}
                        />
                        <AccentButton
                            scale="medium"
                            onClick={() => pasteButtonDisabled ? null : handleImageAdd(pastedURL)}
                        >
                            { t('add') }
                        </AccentButton>
                    </div>
                </Fragment>
        }
    </div>

}