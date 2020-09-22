import './MAppBar.scss';

import React, { Component, HTMLAttributes } from 'react';

import { MAvatar } from '../MAvatar';
import { MButton } from '../MButton';
import { MLink } from '../MLink';
import { MText } from '../MText';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { getClassList } from '../../assets/ts/utils';
import logoImg from '../../assets/img/logo.png';

interface props {
  menuItems?: MenuItem[],
  user?: any,
}

interface MenuItem {
  label: string,
  path: string,
}

export class MAppBar extends Component<props & HTMLAttributes<HTMLDivElement>> {
  state = {
    menuIsOpen: false,
  };

  handleMenuClick = () => this.setState({ menuIsOpen: !this.state.menuIsOpen });

  render() {
    const { className, menuItems } = this.props;
    const { menuIsOpen } = this.state;

    return (
      <header role="banner" className={`m-app-bar ${className}`}>
        {
          menuIsOpen
            ? <div className="m-app-bar__menu-overlay" onClick={this.handleMenuClick}/>
            : null
        }

        <MButton icon={faBars} className="m-app-bar__menu-trigger" onClick={this.handleMenuClick} />

        <img src={logoImg} alt="mLabs logo" className="m-app-bar__logo"/>

        <nav className={getClassList(
          'm-app-bar__menu',
          menuIsOpen && 'm-app-bar__menu--open'
        )}>
          <ul className="m-app-bar__menu-list">
            {
              menuItems?.map((menuItem, i) => (
                <li
                  key={i}
                  className="m-app-bar__menu-item"
                >
                  <MLink
                    to={menuItem.path}
                    className="m-app-bar__menu-link"
                  >
                    {menuItem.label}
                  </MLink>
                </li>
              ))
            }
          </ul>
        </nav>

        <div className="m-app-bar__user-area">
          <MAvatar name="João Pedro" />
          <MText>João Pedro</MText>
        </div>
      </header>
    );
  }
}