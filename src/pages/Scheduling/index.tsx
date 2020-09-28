import './Scheduling.scss';

import * as SocialNetworkActions from '../../store/socialNetworks/actions';

import { BUTTON_VARIANTS, MButton } from '../../components/MButton';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { MCard, MPostCard } from '../../components/MCard';
import { MText, TEXT_VARIANT } from '../../components/MText';
import React, { Component } from 'react';

import { ApplicationState } from '../../store';
import { DndProvider } from 'react-dnd'
import { DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MCheckbox } from '../../components/MCheckBox';
import { MDatePicker } from '../../components/MDatePicker';
import { MDragAndDrop } from '../../components/MDragAndDrop';
import { MTextArea } from '../../components/MTextArea';
import { MTimePicker } from '../../components/MTimePicker';
import { SOCIAL_NETWORK_STATUS } from '../../models/SocialNetwork.model';
import { SocialNetwork } from '../../store/socialNetworks/types';
import { connect } from 'react-redux';

interface state {
  datePost: Date,
  selectedSocialNetwork: number[],
  postData?: any,
}

interface StateProps {
  socialNetworks: SocialNetwork[],
}

interface DispatchProps {
  loadSocialNetwork(): any,
}

class Scheduling extends Component<StateProps & DispatchProps> {
  state: state = {
    datePost: new Date(),
    selectedSocialNetwork: [],
    postData: [
      {
        image: 'https://picsum.photos/368',
        userName: 'João Pedro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      },
    ],
  };

  componentDidMount() {
    const { loadSocialNetwork } = this.props;
    loadSocialNetwork();
  }

  handleFileDrop = (_item: any, monitor: DropTargetMonitor) => {
    const droppedFile = URL.createObjectURL(monitor.getItem().files[0]);
    this.setState({ droppedFile });
  }

  onChangeDate = (datePost: Date) => this.setState({ datePost });

  onChangeCheckbox = (e: any) => {
    const target = e.target;
    const selectedSocialNetwork = this.state.selectedSocialNetwork;

    if (target.checked) {
      selectedSocialNetwork?.push(target.value);
    } else {
      selectedSocialNetwork.map((item, i) => {
        if (item === target.value) selectedSocialNetwork.splice(i, 1);
      });
    }

    this.setState({ selectedSocialNetwork });
  }

  render() {
    const { datePost, selectedSocialNetwork, postData } = this.state;
    const { socialNetworks } = this.props;
    return (
      <section className="page-scheduling">
        <MCard
          className="page-scheduling__social-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Redes Sociais</MText>}
        >
          {
            socialNetworks.map((socialNetwork, i) =>
              <MCheckbox
                key={i}
                icon={socialNetwork.icon}
                value={socialNetwork.id}
                disabled={socialNetwork.status === SOCIAL_NETWORK_STATUS.DISABLED}
                onChange={this.onChangeCheckbox}
              />
            )
          }
        </MCard>

        <MCard
          className="page-scheduling__date-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Data de publicação</MText>}
        >
          <MDatePicker value={datePost} onChange={this.onChangeDate} />
          <MTimePicker value={datePost} onChange={this.onChangeDate} />
        </MCard>

        <MCard
          className="page-scheduling__preview-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Visualização do post</MText>}
        >
          <div className="page-scheduling__preview-container">
            {
              selectedSocialNetwork?.map((item, i) => (
                <div key={i} className="page-scheduling__preview-post">
                  <MPostCard {...postData} socialNetwork={item} />
                </div>
              ))
            }
          </div>
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

const mapStateToProps = (state: ApplicationState) => ({
  socialNetworks: state.socialNetworks.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SocialNetworkActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Scheduling);