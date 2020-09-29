import './MTextArea.scss';
import 'emoji-mart/css/emoji-mart.css'

import { EmojiData, Picker } from 'emoji-mart'
import React, { ChangeEvent, Component, TextareaHTMLAttributes } from 'react';

import { MButton } from '../MButton';
import { faLaugh } from '@fortawesome/free-solid-svg-icons';
import { getClassList } from '../../assets/ts/utils';

export class MTextArea extends Component<TextareaHTMLAttributes<HTMLTextAreaElement>> {
  state = {
    isFocused: false,
    emojiMartIsOpen: false,
    textAreaValue: '',
    textAreaPointerPosition: 0,
  };

  className = 'm-text-area'

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => this.setState({
    isFocused: false,
    textAreaPointerPosition: e.target.selectionEnd,
  });

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ textAreaValue: e.target.value });

    const { onChange } = this.props;
    if (onChange) onChange(e);
  }

  handleEmojiClick = () => this.setState({ emojiMartIsOpen: !this.state.emojiMartIsOpen });

  handleEmojiSelect = (emoji: EmojiData | any) => {
    const { textAreaPointerPosition } = this.state;
    const textArr = this.state.textAreaValue.split('');
    textArr.splice(textAreaPointerPosition, 0, emoji.native);
    const newText = textArr.join('');

    this.setState({
      textAreaValue: newText,
    })
  }

  getEmojiMartStyles = () => ({
    display: this.state.emojiMartIsOpen ? 'block' : 'none',
  });

  render() {
    const { isFocused, textAreaValue } = this.state;
    return(
      <div className={getClassList(
        this.className,
        isFocused && `${this.className}--active`
      )}>
        <textarea
          {...this.props}
          value={textAreaValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />

        <MButton icon={faLaugh} onClick={this.handleEmojiClick} aria-label="emoji picker" />

        <Picker
          style={this.getEmojiMartStyles()}
          color="rgb(49, 130, 237)"
          title=""
          showPreview={false}
          emoji=""
          showSkinTones={false}
          onSelect={this.handleEmojiSelect}
        />
      </div>
    );
  }
}
