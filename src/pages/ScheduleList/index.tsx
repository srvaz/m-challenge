import './ScheduleList.scss';

import * as SchedulingActions from '../../store/schedules/actions';

import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { MCard, MPostCard } from '../../components/MCard';
import { MText, TEXT_VARIANT } from '../../components/MText';
import React, { Component } from 'react';

import { ApplicationState } from '../../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MButton } from '../../components/MButton';
import { MStatus } from '../../components/MStatus';
import MTable from '../../components/MTable';
import { Post } from '../../store/schedules/types';
import { SocialNetwork } from '../../store/socialNetworks/types';
import { connect } from 'react-redux';

interface props {
  loadPost(): void,
  schedules: Post[],
}

class ScheduleList extends Component<props> {
  state = {
    previewIsOpen: false,
    socialNetworks: [],
    userName: 'João Pedro',
    description: '',
    postImage: '',
    columns: [
      {
        Header: 'Redes sociais',
        accessor: 'social_networks',
        Cell: props => (
          <div style={{ display: 'grid', justifyContent: 'center', gap: 8, gridAutoFlow: 'column' }}>
            {
              props.cell.value.data.map((socialNetwork: SocialNetwork, i: number) => (
                <div
                  key={i}
                  className={`page-schedule-list__icon page-schedule-list__icon--${socialNetwork.icon}`}
                >
                  <FontAwesomeIcon icon={['fab', socialNetwork.icon]} />
                </div>
              ))
            }
          </div>
        ),
      },
      {
        Header: 'Mídia',
        accessor: 'media',
        Cell: props => <img className="page-schedule-list__img" src={props.cell.value} alt="teste"/>,
      },
      {
        Header: 'Texto',
        accessor: 'text',
      },
      {
        Header: 'Data',
        accessor: 'publication_date',
        Cell: props => {
          const date = new Date(Date.parse(props.cell.value));


          return <span>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}h`}</span>;
        },
      },
      {
        Header: 'Ações',
        accessor: 'actions',
        Cell: props => <MButton onClick={() => this.openPreview(props)}>Preview</MButton>,
      },
      {
        Header: 'Status',
        accessor: 'schedule_status',
        Cell: props => <MStatus status={props.cell.value} />,
      },
    ],
  };

  componentDidMount() {
    this.props.loadPost();
  }

  openPreview = (props: any) => {
    const { media, social_networks, text } = props.row.values;

    this.setState({
      previewIsOpen: true,
      socialNetworks: social_networks.data,
      description: text,
      postImage: media,
    });
  }

  closePreview = () => {
    this.setState({ previewIsOpen: false });
  }

  render() {
    const { schedules } = this.props;
    const { columns, previewIsOpen, socialNetworks, userName, description, postImage } = this.state;

    return (
      <section className="page-schedule-list">
        <MTable columns={columns} data={schedules} />
        {
          previewIsOpen
            ? <div
                className="page-schedule-list__preview-overlay"
                onClick={this.closePreview}
              >
                <MCard
                  className="page-schedule-list__preview-card"
                  title={<MText variant={TEXT_VARIANT.TITLE}>Visualização do post</MText>}
                >
                  <div className="page-schedule-list__preview-container">
                    {
                      socialNetworks?.map((item, i) => (
                        <div key={i} className="page-schedule-list__preview-post">
                          <MPostCard
                            userName={userName}
                            description={description}
                            socialNetwork={item}
                            media={postImage}
                          />
                        </div>
                      ))
                    }
                  </div>
                </MCard>
              </div>
            : null
        }
      </section>
    );
  }
};

const mapStateToProps = (state: ApplicationState) => ({
  schedules: state.schedules.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SchedulingActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleList);
