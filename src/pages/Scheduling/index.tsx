import './Scheduling.scss';

import * as SocialNetworkActions from '../../store/socialNetworks/actions';

import { BUTTON_VARIANTS, MButton } from '../../components/MButton';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { MCard, MPostCard } from '../../components/MCard';
import { MText, TEXT_VARIANT } from '../../components/MText';
import React, { ChangeEvent, Component } from 'react';

import { ApplicationState } from '../../store';
import { DndProvider } from 'react-dnd'
import { DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MCheckbox } from '../../components/MCheckBox';
import { MDatePicker } from '../../components/MDatePicker';
import { MDragAndDrop } from '../../components/MDragAndDrop';
import { MTextArea } from '../../components/MTextArea';
import { MTimePicker } from '../../components/MTimePicker';
import { Redirect } from 'react-router-dom';
import { SOCIAL_NETWORK_STATUS } from '../../models/SocialNetwork.model';
import { SocialNetwork } from '../../store/socialNetworks/types';
import api from '../../services/api';
import { connect } from 'react-redux';
import modalImage from '../../assets/img/emoji.png';
import { toBase64 } from '../../assets/ts/utils';

interface state {
  datePost: Date,
  selectedSocialNetwork: any,
  userName: string,
  postImage: string,
  description: string,
  modalIsOpen: boolean,
  redirect: boolean,
  actionIsActivated: boolean,
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
    postImage: '',
    userName: 'João Pedro',
    description: '',
    modalIsOpen: false,
    redirect: false,
    actionIsActivated: false,
  };

  componentDidMount() {
    const { loadSocialNetwork } = this.props;
    loadSocialNetwork();
  }

  handleFileDrop = async (_item: any, monitor: DropTargetMonitor) => {
    const droppedFile = monitor.getItem().files[0];
    const fileInBase64 = await toBase64(droppedFile);
    this.setState({ postImage: fileInBase64 });
  }

  handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => this.setState({ description: e.target.value});

  onChangeDate = (datePost: Date) => this.setState({ datePost });

  onChangeCheckbox = (e: any) => {
    const target = e.target;
    const selectedSocialNetwork = this.state.selectedSocialNetwork;

    if (target.checked) {
      selectedSocialNetwork?.push(target.value);
    } else {
      // eslint-disable-next-line array-callback-return
      selectedSocialNetwork.map((item, i) => {
        const socialNetwork = JSON.parse(item);
        const value = JSON.parse(target.value);
        if (socialNetwork.id === value.id) selectedSocialNetwork.splice(i, 1);
      });
    }

    this.setState({
      selectedSocialNetwork,
      actionIsActivated: !!this.state.selectedSocialNetwork.length
    });
  }

  savePost = () => {
    const { description, postImage, datePost, selectedSocialNetwork } = this.state;
    const socialNetworkKeys: any[] = [];

    selectedSocialNetwork.map(item => socialNetworkKeys.push(JSON.parse(item).id))

    api.post(
      'schedules/add',
      {
        social_network_key: socialNetworkKeys,
        text: description,
        publication_date: datePost,
        media: postImage,
        status_key: 1,
      },
    );

    this.handleModalState();
  }

  handleModalState = () =>
    this.setState({ modalIsOpen: !this.state.modalIsOpen });

  confirmModal = () => this.setState({ redirect: true });

  render() {
    const {
      datePost,
      selectedSocialNetwork,
      userName,
      description,
      postImage,
      modalIsOpen,
      redirect,
      actionIsActivated,
    } = this.state;
    const { socialNetworks } = this.props;

    if (redirect) {
      return <Redirect to="/schedule-list" />
    }
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
                value={JSON.stringify(socialNetwork)}
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
                  <MPostCard
                    userName={userName}
                    description={description}
                    socialNetwork={JSON.parse(item)}
                    media={postImage}
                  />
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
            onChange={this.handleDescription}
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

        <div className="page-scheduling__action-bar">
          <MButton>Cancelar</MButton>
          <MButton variant={BUTTON_VARIANTS.OUTLINED}>Salvar Rascunho</MButton>
          <MButton variant={BUTTON_VARIANTS.PRIMARY} onClick={this.savePost} disabled={!actionIsActivated}>Agendar</MButton>
        </div>

        {
          modalIsOpen
            ? <div style={{ position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="page-scheduling__modal">
                  <div style={{ display: 'grid', gap: 16 }}>
                    <img src={modalImage} alt="modal icon"/>
                    <MText variant={TEXT_VARIANT.TITLE}>
                      Agendado com sucesso!
                    </MText>
                    <MButton
                      variant={BUTTON_VARIANTS.PRIMARY}
                      onClick={this.confirmModal}
                    >
                      OK
                    </MButton>
                  </div>
                </div>
              </div>
            : null
        }
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