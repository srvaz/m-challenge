import './Scheduling.scss';

import { BUTTON_VARIANTS, MButton } from '../../components/MButton';
import { MCard, MPostCard } from '../../components/MCard';
import { MText, TEXT_VARIANT } from '../../components/MText';
import React, { Component } from 'react';
import { SOCIAL_NETWORK_STATUS, SocialNetwork } from '../../models/SocialNetwork.model';

import { DndProvider } from 'react-dnd'
import { DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MCheckbox } from '../../components/MCheckBox';
import { MDatePicker } from '../../components/MDatePicker';
import { MDragAndDrop } from '../../components/MDragAndDrop';
import { MTextArea } from '../../components/MTextArea';
import { MTimePicker } from '../../components/MTimePicker';

interface state {
  datePost: Date,
  socialNetworkList: SocialNetwork[],
  selectedSocialNetwork?: SocialNetwork[],
  postData?: any,
}
export default class Scheduling extends Component {
  state: state = {
    datePost: new Date(),
    socialNetworkList: [],
    selectedSocialNetwork: [
      {
        id: 3,
        name: 'Instagram',
        icon: 'instagram',
        status: SOCIAL_NETWORK_STATUS.ENABLED
      },
      {
        id: 2,
        name: 'Linkedin',
        icon: 'linkedin-in',
        status: SOCIAL_NETWORK_STATUS.ENABLED
      }
    ],
    postData: [
      {
        image: 'https://picsum.photos/368',
        userName: 'João Pedro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      },
    ],
  };

  componentDidMount() {
    const socialNetworkList: SocialNetwork[] = [];
    socialNetworkList.push(
      new SocialNetwork({
        id: 1,
        name: 'Facebook',
        icon: 'facebook-f',
        status: SOCIAL_NETWORK_STATUS.DISABLED
      }),
      new SocialNetwork({
        id: 2,
        name: 'Linkedin',
        icon: 'linkedin-in',
        status: SOCIAL_NETWORK_STATUS.ENABLED
      }),
      new SocialNetwork({
        id: 3,
        name: 'Instagram',
        icon: 'instagram',
        status: SOCIAL_NETWORK_STATUS.ENABLED
      }),
      new SocialNetwork({
        id: 4,
        name: 'YouTube',
        icon: 'youtube',
        status: SOCIAL_NETWORK_STATUS.DISABLED
      }),
      new SocialNetwork({
        id: 5,
        name: 'Pinteres',
        icon: 'pinterest-p',
        status: SOCIAL_NETWORK_STATUS.DISABLED
      }),
      new SocialNetwork({
        id: 6,
        name: 'Twitter',
        icon: 'twitter',
        status: SOCIAL_NETWORK_STATUS.DISABLED
      })
    )

    this.setState({ socialNetworkList })
  }

  handleFileDrop = (_item: any, monitor: DropTargetMonitor) => {
    const droppedFile = URL.createObjectURL(monitor.getItem().files[0]);
    this.setState({ droppedFile });
  }

  onChangeDate = (datePost: Date) => this.setState({ datePost });

  render() {
    const { datePost, socialNetworkList, selectedSocialNetwork, postData } = this.state;
    return (
      <section className="page-scheduling">
        <MCard
          className="page-scheduling__social-card"
          title={<MText variant={TEXT_VARIANT.TITLE}>Redes Sociais</MText>}
        >
          {
            socialNetworkList.map((socialNetwork, i) =>
              <MCheckbox
                key={i}
                icon={socialNetwork.icon}
                disabled={socialNetwork.status === SOCIAL_NETWORK_STATUS.DISABLED}
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
