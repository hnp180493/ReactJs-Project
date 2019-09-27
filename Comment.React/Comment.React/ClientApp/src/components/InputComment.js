import React from 'react';

export default class InputComment extends React.Component {
    render() {
        return (
            <form className="new_comment" onSubmit={this.props.onSubmit}>
                <div className="field">
                    <textarea
                        placeholder="Add to the discussion"
                        onChange = {this.props.onChange}
                    >
                    </textarea>
                    <div className="preview-toggle comment-preview-div"></div>
                </div>
                <div className="editor-image-upload">
                    <input type="file" id="image-upload-main" name="file" accept="image/*" />
                    <button type="button" className="image-upload-button">
                        <img className="icon-image"
                            src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/image-upload-3a2d56cb56c9a8f3242791854c02e6cdc0a3cf71f3d007ea1278e323ffa2abc8.svg"
                            alt = ""/>
                    </button>
                    {/* <label className="image-upload-file-label"></label> */}
                    <input type="button" id="image-upload-submit-main" value="Upload" />
                    <input className="uploaded-image" id="uploaded-image-main" />
                </div>
                <div className="actions">
                    <input type="submit" className="comment-action-button" value="SUBMIT" />
                </div>
            </form>
        )
    }
}