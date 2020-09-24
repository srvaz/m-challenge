import './Scheduling.scss';

import { BUTTON_VARIANTS, MButton } from '../../components/MButton';
import { MText, TEXT_VARIANT } from '../../components/MText';
import React, { Component } from 'react';

import { DndProvider } from 'react-dnd'
import { DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MCard } from '../../components/MCard';
import { MDatePicker } from '../../components/MDatePicker';
import { MDragAndDrop } from '../../components/MDragAndDrop';
import { MTextArea } from '../../components/MTextArea';
import { MTimePicker } from '../../components/MTimePicker';

export default class Scheduling extends Component {
  state = {
    datePost: new Date()
  };

  handleFileDrop = (_item: any, monitor: DropTargetMonitor) => {
    const droppedFile = URL.createObjectURL(monitor.getItem().files[0]);
    this.setState({ droppedFile });
  }

  render() {
    const { datePost } = this.state;
    return (
      <section className="page-scheduling">
        <MCard
          className="page-scheduling__social-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Redes Sociais</MText>}
        >
        </MCard>

        <MCard
          className="page-scheduling__date-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Data de publicação</MText>}
        >
          <MDatePicker value={datePost} />
          <MTimePicker value={datePost} />
        </MCard>

        <MCard
          className="page-scheduling__preview-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Visualização do post</MText>}
        >
        </MCard>

        <MCard
          className="page-scheduling__post-text-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Texto do post</MText>}
        >
          <MTextArea
            placeholder="Aqui vai o texto descritivo desse post"
          />
        </MCard>

        <MCard
          className="page-scheduling__media-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Upload de imagem</MText>}
        >
          <DndProvider backend={HTML5Backend}>
            <MDragAndDrop onDrop={this.handleFileDrop} />
          </DndProvider>
        </MCard>

        <MButton
          className="page-scheduling__preview-button"
          variant={BUTTON_VARIANTS.SECONDARY}
        >
          Visualizar post
        </MButton>
      </section>
    )
  }
}
