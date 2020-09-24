import './MDragAndDrop.scss';

import { DropTargetMonitor, useDrop } from 'react-dnd';
import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MText } from '../MText';
import { NativeTypes } from 'react-dnd-html5-backend';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

interface MDragAndDropProps {
  onDrop: (props: MDragAndDropProps, monitor: DropTargetMonitor) => void,
}

export const MDragAndDrop: FC<MDragAndDropProps> = (props) => {
  const { onDrop } = props
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(_item, monitor) {
      if (onDrop) {
        onDrop(props, monitor)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver
  return (
    <article
      className="m-drag-and-drop"
      ref={drop}
    >
      <FontAwesomeIcon
        className="m-drag-and-drop__icon"
        icon={faCloudUploadAlt}
      />
      <MText>
        {isActive ? 'Solte o arquivo!' : 'Arraste e solte uma imagem aqui ou clique no botão abaixo'}
      </MText>
    </article>
  )
}